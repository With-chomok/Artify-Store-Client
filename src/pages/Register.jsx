import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasLength = password.length >= 6;
    return hasUpper && hasLower && hasLength;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      toast.error(
        "Password must include uppercase, lowercase, and at least 6 characters."
      );
      return;
    }

    console.log({ name, photo, email, password });
    toast.success("Registration Successful!");
    setTimeout(() => navigate("/home"), 1500);
  };

  const handleGoogleSignup = () => {
    toast("Google signup feature coming soon!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-md p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Your Account 🌟
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold mb-2">Photo URL</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white transition-all py-2 rounded-lg font-semibold mt-4 cursor-pointer"
          >
            Register
          </button>
        </form>

        {/* Google Signup */}
        <div className="text-center mt-1">
          <p className="text-sm mb-2">Or sign up using</p>
          <button
            onClick={handleGoogleSignup}
            className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white cursor-pointer transition-all px-4 py-2 rounded-lg font-semibold w-full"
          >
            Sign up with Google
          </button>
        </div>

        
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-300 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
