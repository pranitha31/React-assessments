import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(form.email, form.password);
      navigate("/todos");
    } catch (err) {
      setError("Invalid credentials or network issue.");
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="mb-4 text-xl font-semibold">Login</h1>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-gray-700">Email</label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-700">Password</label>
          <Input
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm((p) => ({ ...p, password: e.target.value }))
            }
            placeholder="••••••••"
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
      <p className="mt-3 text-sm">
        No account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
