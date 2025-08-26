import { Link } from "react-router-dom";

export default function SeekerLogin() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Seeker Login</h2>
        
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg" />
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          Don’t have an account? <Link to="/seeker/register" className="text-indigo-600">Register</Link>
        </p>
      </div>
    </div>
  );
}
