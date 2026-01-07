import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, initializing } = useAuthContext();

  if (initializing) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-gray-600">
        Loading...
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;
  return children;
}
