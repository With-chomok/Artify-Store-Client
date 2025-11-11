import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const lengthPass = password.length >= 6;
    return upperCase && lowerCase && lengthPass;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!validatePassword(password)) {
      toast.error(
        "Password must include uppercase, lowercase, and at least 6 characters."
      );
      return;
    }

    toast.loading("Creating user...", { id: "create-user" });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(displayName, photo);
        toast.success("User created successfully!", { id: "create-user" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  const handleGoogleSignIn = () => {
    toast.loading("Creating user...", { id: "create-user" });
    signInWithGoogle()
      .then((result) => {
        toast.success("User created successfully!", { id: "create-user" });
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-md p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Your Account 🌟
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              name="name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              name="photo"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              name="email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              name="password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white transition-all py-2 rounded-lg font-semibold mt-4 cursor-pointer">
            Register
          </button>

          <div className="text-center mt-1">
            <p className="text-sm mb-2">Or sign up using</p>
            <button
              onClick={handleGoogleSignIn}
              className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white cursor-pointer transition-all px-4 py-2 rounded-lg font-semibold w-full">
              Sign up with Google
            </button>
          </div>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-300 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
