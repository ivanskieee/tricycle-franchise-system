import { Routes, Route } from "react-router-dom";
import LoginPage from "./authentication/LoginPage";
import RegisterPage from "./authentication/RegisterPage";
import LandingPage from "./authentication/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPage from "./authentication/Admin-SuperAdminPage";
import VerifyEmailPage from "./authentication/VerifyEmailPage";
import Dashboard from "./AdminLandingPage/pages/Dashboard";
import ClientsPage from "./AdminLandingPage/pages/ClientsPage";
import FranchisePage from "./AdminLandingPage/pages/FranchisePage";
import ViolationsPage from "./AdminLandingPage/pages/ViolationsPage"; // ✅ NEW
import AdminLayout from "./AdminLandingPage/layouts/AdminLayout";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/superadmin" element={<AdminPage />} />
        <Route path="/verify" element={<VerifyEmailPage />} />

        {/* Admin routes with layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} /> {/* /admin */}
          <Route path="clients" element={<ClientsPage />} /> {/* /admin/clients */}
          <Route path="franchise" element={<FranchisePage />} /> {/* /admin/franchise */}
          <Route path="violations" element={<ViolationsPage />} /> {/* /admin/violations ✅ */}
        </Route>
      </Routes>
    </>
  );
}
