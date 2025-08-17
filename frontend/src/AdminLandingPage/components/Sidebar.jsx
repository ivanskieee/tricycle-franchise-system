import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  FileText,
  Shield,
  LogOut,
  CircleDot,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";
import logo from "../../assets/alaminos-logo.png";

const nav = [
  {
    to: "/admin",
    label: "Dashboard",
    icon: <LayoutGrid className="w-5 h-5" />,
  },
  {
    to: "/admin/clients",
    label: "Clients",
    icon: <Users className="w-5 h-5" />,
  },
  {
    to: "/admin/franchise",
    label: "Franchise",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    to: "/admin/violations",
    label: "Violations",
    icon: <Shield className="w-5 h-5" />,
  },
];

export default function Sidebar({ open, setOpen, collapsed, setCollapsed }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside
      className={clsx(
        "fixed z-40 inset-y-0 left-0 bg-white/90 backdrop-blur-md border-r border-white/30 shadow-xl transform transition-all duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0",
        collapsed ? "w-20" : "w-72"
      )}
    >
      {/* Header */}
      <div className="relative h-20 flex items-center gap-3 px-5 border-b transition-all duration-300">
        <img
          src={logo}
          alt="Logo"
          className={clsx(
            "rounded-xl shadow transition-all duration-300",
            collapsed ? "w-10 h-10" : "w-12 h-12"
          )}
        />
        {!collapsed && (
          <div className="transition-opacity duration-300">
            <div className="text-xs text-gray-500">City Government</div>
            <div className="font-semibold text-gray-800 leading-tight">
              Tricycle Franchising & Renewal
            </div>
          </div>
        )}

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-1 hover:bg-gray-100"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Nav Links */}
      <nav className="p-3 space-y-1">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/admin"} // 👈 only exact match for dashboard
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-indigo-50 text-indigo-700 border border-indigo-100"
                  : "text-gray-600 hover:bg-gray-50",
                collapsed && "justify-center"
              )
            }
            onClick={() => setOpen?.(false)}
          >
            {item.icon}
            {!collapsed && <span className="font-medium">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-full p-4 border-t">
        <button
          onClick={logout}
          className={clsx(
            "w-full flex items-center gap-2 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-all duration-300",
            collapsed && "justify-center"
          )}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && "Logout"}
        </button>
        {!collapsed && (
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
            <CircleDot className="w-3 h-3 text-emerald-500" /> Secure • 256-bit
            SSL
          </div>
        )}
      </div>
    </aside>
  );
}
