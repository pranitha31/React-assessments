import useAuth from "../hooks/useAuth";
import { FILTERS } from "../utils/constants";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// If using shadcn/ui:
import { Button } from "@/components/ui/button"; // adjust alias or import

export default function Navbar() {
  const { user, logout } = useAuth();
  const [filter, setFilter] = useState(FILTERS.ALL);
  const location = useLocation();
  const navigate = useNavigate();

  const onSignOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to={user ? "/todos" : "/"} className="text-lg font-semibold">
          Todos Pro
        </Link>

        {location.pathname === "/todos" && (
          <div className="flex gap-2">
            <Button
              variant={filter === FILTERS.ALL ? "default" : "outline"}
              onClick={() => setFilter(FILTERS.ALL)}
            >
              All
            </Button>
            <Button
              variant={filter === FILTERS.COMPLETED ? "default" : "outline"}
              onClick={() => setFilter(FILTERS.COMPLETED)}
            >
              Completed
            </Button>
            <Button
              variant={filter === FILTERS.PENDING ? "default" : "outline"}
              onClick={() => setFilter(FILTERS.PENDING)}
            >
              Pending
            </Button>
          </div>
        )}

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-600">{user.email}</span>
              <Button variant="destructive" onClick={onSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button variant="default">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
