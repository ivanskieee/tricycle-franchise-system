import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles = [] }) {
  const role = localStorage.getItem("userRole");
  const status = localStorage.getItem("userStatus");

  const isApproved = status === "approved";
  const isAllowed = allowedRoles.includes(role);

  if (!isAllowed || !isApproved) return <Navigate to="/" replace />;
  return <Outlet />;
}
