import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <input className="w-full border p-2 mb-3 rounded" placeholder="Email" />
        <input className="w-full border p-2 mb-4 rounded" type="password" placeholder="Password" />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
        <p className="text-sm mt-4 text-center">
          No account? <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </form>
    </div>
  );
}
