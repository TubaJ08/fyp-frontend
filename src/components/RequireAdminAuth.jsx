import { Navigate } from "react-router-dom";

export default function RequireAdminAuth({ children }) {
  const token = localStorage.getItem("adminToken");

  if (!token) return <Navigate to="/admin/login" />;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));

    if (!payload.isAdmin) {
      return <Navigate to="/" />;
    }

    return children;
  } catch (err) {
    console.error("Invalid token:", err);
    return <Navigate to="/admin/login" />;
  }
}