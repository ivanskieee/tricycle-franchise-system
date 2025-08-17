import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Shield,
  Clock,
  Globe,
  AlertCircle,
  Zap,
  Users,
} from "lucide-react";
import bgImage from "../assets/capitol-spc.jpg";
import logoImage from "../assets/alaminos-logo.png";
import DCSILOGO from "../assets/dcsi-logo-no-background.png";


const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTimer, setLockoutTimer] = useState(0);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [onlineUsers, setOnlineUsers] = useState(Math.floor(Math.random() * 50) + 100);
  const [validations, setValidations] = useState({
    email: false,
    password: false,
  });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Lockout timer
  useEffect(() => {
    if (lockoutTimer > 0) {
      const timer = setTimeout(() => setLockoutTimer(lockoutTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (lockoutTimer === 0 && isLocked) {
      setIsLocked(false);
      setLoginAttempts(0);
    }
  }, [lockoutTimer, isLocked]);

  // Calculate password strength
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const getPasswordStrengthText = (strength) => {
    if (strength === 0) return { text: "", color: "" };
    if (strength <= 25) return { text: "Weak", color: "text-red-400" };
    if (strength <= 50) return { text: "Fair", color: "text-yellow-400" };
    if (strength <= 75) return { text: "Good", color: "text-blue-400" };
    return { text: "Strong", color: "text-emerald-400" };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email") {
      setValidations((prev) => ({
        ...prev,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      }));
    }
    if (name === "password") {
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
      setValidations((prev) => ({
        ...prev,
        password: value.length >= 6,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLocked) {
      toast.error(`Account locked. Try again in ${lockoutTimer} seconds.`);
      return;
    }

    if (!form.email || !form.password) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/login", form);

      const { role, status } = res.data;

      localStorage.setItem("userRole", role);
      localStorage.setItem("userStatus", status);
      localStorage.setItem("userEmail", form.email);
      
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
        localStorage.setItem("savedEmail", form.email);
      }

      toast.success("Login successful!");

      setLoginAttempts(0);

      if (role === "superadmin") {
        navigate("/superadmin");
      } else if (role === "admin") {
        if (status === "approved") {
          navigate("/admin");
        } else {
          toast.error("Your admin account is pending approval.");
          navigate("/");
        }
      } else if (role === "user") {
        if (status === "approved") {
          navigate("/landing");
        } else {
          toast.error("Your user account is pending approval.");
          navigate("/");
        }
      } else {
        toast.error(
          "Login successful, but role/status not recognized. Contact support."
        );
        navigate("/");
      }
    } catch (err) {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      
      if (newAttempts >= 3) {
        setIsLocked(true);
        setLockoutTimer(30); // 30 second lockout
        toast.error("Too many failed attempts. Account locked for 30 seconds.");
      } else {
        toast.error(err.response?.data?.message || "Login failed.");
        toast.warning(`${3 - newAttempts} attempts remaining.`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Load saved email on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    const rememberMeFlag = localStorage.getItem("rememberMe");
    if (rememberMeFlag === "true" && savedEmail) {
      setForm(prev => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
      setValidations(prev => ({ ...prev, email: true }));
    }
  }, []);

  const inputClasses = (fieldName) => `
    w-full px-4 py-4 pl-12 bg-gray-50 border rounded-xl
    transition-all duration-300 ease-out text-gray-800 placeholder-gray-400
    focus:outline-none focus:border-sky-500 focus:bg-white focus:shadow-lg
    hover:bg-gray-100 hover:border-gray-300
    ${focusedField === fieldName ? "shadow-lg shadow-sky-500/20 transform scale-[1.02]" : ""}
    ${validations[fieldName] ? "border-emerald-500" : "border-gray-200"}
    ${isLocked ? "opacity-50 cursor-not-allowed" : ""}
  `;

  const strengthColors = {
    0: "bg-gray-200",
    25: "bg-red-400",
    50: "bg-yellow-400", 
    75: "bg-blue-400",
    100: "bg-emerald-400"
  };

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Blue tint overlay for styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-800/20 to-sky-600/30"></div>

      {/* Header with live stats */}
      <header className="relative z-50 bg-black/20 backdrop-blur-sm py-2 px-6 md:px-12 flex justify-between items-center text-white">
        <div className="flex items-center space-x-3">
           <img 
                    src={DCSILOGO} 
                    alt="SPC Logo" 
                    className="w-20 h-12"
                  />
        
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">{onlineUsers}</span>
            <span className="text-sky-200">online</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-sky-300" />
            <span className="text-sky-200">
              {currentTime.toLocaleTimeString()}
            </span>
          </div>
          <nav className="flex items-center space-x-4">
            <a className="opacity-90 hover:opacity-100 transition cursor-pointer">Help</a>
            <a className="opacity-90 hover:opacity-100 transition cursor-pointer">Contact</a>
          </nav>
        </div>
      </header>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-indigo-400/8 rounded-full blur-3xl animate-pulse delay-1000" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random()}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-40 pt-4 flex items-center justify-center px-4 ">
        <div className="w-full max-w-md">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-md p-8 border border-white/20 shadow-2xl animate-slide-up">
              {/* Logo and Header */}
              <div className="text-center mb-8 animate-fade-in">
                <div className="relative inline-block mb-4">
                  <img 
                    src={logoImage} 
                    alt="SPC Logo" 
                    className="w-20 h-20 mx-auto rounded-2xl shadow-lg animate-bounce-gentle"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2 drop-shadow-sm">
                  TRICYCLE FRANCHISING AND RENEWAL SYSTEM
                </h1>
                
                {/* Security indicators */}
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <span>Powered by DCSI</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center space-x-1">
                    <Globe className="w-4 h-4 text-blue-500" />
                    <span>Secure Connection</span>
                  </div>
                </div>
              </div>

              {/* Login attempts warning */}
              {loginAttempts > 0 && !isLocked && (
                <div className="mb-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-yellow-700 text-sm">
                    {loginAttempts} failed attempt{loginAttempts > 1 ? 's' : ''}. {3 - loginAttempts} remaining.
                  </span>
                </div>
              )}

              {/* Lockout warning */}
              {isLocked && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-red-600" />
                  <span className="text-red-700 text-sm">
                    Account locked. Try again in {lockoutTimer} seconds.
                  </span>
                </div>
              )}

              {/* Email Field */}
              <div className="relative mb-6">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Mail
                    className={`w-5 h-5 transition-all duration-300 ${
                      focusedField === "email" ? "text-sky-500" : "text-gray-400"
                    }`}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className={inputClasses("email")}
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  disabled={isLocked}
                  required
                />
                {validations.email && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 animate-scale-in" />
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className="relative mb-4">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Lock
                    className={`w-5 h-5 transition-all duration-300 ${
                      focusedField === "password" ? "text-sky-500" : "text-gray-400"
                    }`}
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Your password"
                  className={inputClasses("password")}
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField("")}
                  disabled={isLocked}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sky-500 transition-all duration-200 hover:scale-110"
                  disabled={isLocked}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
                {validations.password && (
                  <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 animate-scale-in" />
                  </div>
                )}
              </div>

              {/* Password Strength Indicator */}
              {form.password && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Password strength:</span>
                    <span className={`text-sm font-medium ${getPasswordStrengthText(passwordStrength).color}`}>
                      {getPasswordStrengthText(passwordStrength).text}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        strengthColors[passwordStrength] || strengthColors[0]
                      }`}
                      style={{ width: `${passwordStrength}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Remember Me */}
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="w-4 h-4 text-sky-500 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 focus:ring-2"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLocked}
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || isLocked}
                className={`
                  group relative w-full py-2 px-6 rounded-2xl font-semibold text-lg
                  transition-all duration-300 transform hover:scale-[1.02]
                  focus:outline-none focus:ring-4 focus:ring-sky-300/30
                  ${
                    loading || isLocked
                      ? "bg-gray-300 cursor-not-allowed text-gray-500"
                      : "bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-lg shadow-sky-500/30"
                  }
                `}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin mr-3"></div>
                    Authenticating...
                  </div>
                ) : isLocked ? (
                  <div className="flex items-center justify-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Account Locked ({lockoutTimer}s)
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Sign In
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                )}
              </button>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm mb-6">
                  <Link
                    to="/forgot-password"
                    className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
                  >
                    Forgot Password?
                  </Link>
                  <Link
                    to="/help"
                    className="text-gray-600 hover:text-gray-700 font-medium transition-colors"
                  >
                    Need Help?
                  </Link>
                </div>

                {/* Register Link - Now inside the form */}
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-sky-600 font-medium hover:text-sky-700 transition-colors underline decoration-sky-300 underline-offset-4"
                    >
                      Register here
                    </Link>
                  </p>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>{`
        @keyframes fade-in {
          from {opacity:0; transform:translateY(-20px)}
          to {opacity:1; transform:translateY(0)}
        }
        @keyframes scale-in {
          from {opacity:0; transform:scale(0)}
          to {opacity:1; transform:scale(1)}
        }
        @keyframes slide-up {
          from {opacity:0; transform:translateY(50px)}
          to {opacity:1; transform:translateY(0)}
        }
        @keyframes bounce-gentle {
          0%, 20%, 50%, 80%, 100% {transform:translateY(0)}
          40% {transform:translateY(-10px)}
          60% {transform:translateY(-5px)}
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-scale-in { animation: scale-in 0.28s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-bounce-gentle { animation: bounce-gentle 2s infinite; }
      `}</style>
    </div>
  );
};

export default LoginPage;