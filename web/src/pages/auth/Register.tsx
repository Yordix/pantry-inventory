import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <input className="w-full border p-2 mb-3 rounded" placeholder="Email" />
        <input className="w-full border p-2 mb-3 rounded" placeholder="Username" />
        <input className="w-full border p-2 mb-4 rounded" type="password" placeholder="Password" />
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Register
        </button>
        <p className="text-sm mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;