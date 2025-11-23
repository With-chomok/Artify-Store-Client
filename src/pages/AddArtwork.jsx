import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const AddArtwork = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    name: "",
    category: "",
    medium: "",
    description: "",
    dimensions: "",
    price: "",
    visibility: "Public",
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //  handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (
      !formData.image ||
      !formData.title ||
      !formData.name ||
      !formData.category ||
      !formData.medium ||
      !formData.description
    ) {
      return toast.error("Please fill all required fields!");
    }

    const artworkData = {
      ...formData,
      userName: user?.displayName,
      userEmail: user?.email,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:5000/artworks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(artworkData),
      });

      if (res.ok) {
        toast.success("Artwork added successfully!");
        setFormData({
          image: "",
          title: "",
          category: "",
          medium: "",
          description: "",
          dimensions: "",
          price: "",
          visibility: "Public",
        });
      } else {
        toast.error("Failed to add artwork!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen  py-10 px-4">
      <div className="max-w-3xl mx-auto p-8 rounded-2xl add-artwork-form  shadow-lg">
        <h2 className="md:text-4xl text-2xl font-bold mb-6 text-center">
          <Typewriter
            words={["Add New Artwork."]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1500}
          />
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image URL */}
          <div>
            <Slide>
              <label className="block mb-2 font-medium">Image URL *</label>
            </Slide>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="bg-purple-600 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
          {/* Art. name */}
          <div>
            <Slide>
              <label className="block mb-2 font-medium">Artist Name *</label>
            </Slide>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=" w-full bg-purple-600 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Artwork title"
              required
            />
          </div>

          {/* Title */}
          <div>
            <Slide>
              <label className="block mb-2 font-medium">Title *</label>
            </Slide>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className=" w-full bg-purple-600 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Artwork title"
              required
            />
          </div>

          {/* Category */}
          <div>
            <Slide>
              <label className="block mb-2 font-medium">Category *</label>
            </Slide>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-purple-600 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              required>
              <option value="">Select Category</option>
              <option value="Painting">Painting</option>
              <option value="Digital Art">Digital Art</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Photography">Photography</option>
            </select>
          </div>

          {/* Medium / Tools */}
          <div>
            <Slide>
              <label className="block mb-2 font-medium">Medium / Tools *</label>
            </Slide>
            <input
              type="text"
              name="medium"
              value={formData.medium}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring bg-purple-600 focus:ring-indigo-300"
              placeholder="Oil Paint, Photoshop, etc."
              required
            />
          </div>

          {/* Description */}
          <div>
            <Slide>
              <label className="block mb-2 font-medium">Description *</label>
            </Slide>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-purple-600 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              rows="4"
              placeholder="Describe your artwork..."
              required></textarea>
          </div>

          {/* Dimensions (optional) */}
          <div>
            <Slide>
              <label className="block mb-2 font-medium">
                Dimensions (optional)
              </label>
            </Slide>
            <input
              type="text"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleChange}
              className="bg-purple-600 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="e.g. 12x18 inches"
            />
          </div>

          {/* Price (optional) */}
          <div>
            <Slide>
              <label className="block mb-2 font-medium">Price (optional)</label>
            </Slide>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-purple-600 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="e.g. 150"
            />
          </div>

          {/* Visibility */}
          <div>
            <Slide>
              <label className="block mb-2 font-medium">Visibility</label>
            </Slide>
            <select
              name="visibility"
              value={formData.visibility}
              onChange={handleChange}
              className="bg-purple-600 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300">
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>

          {/* User Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Slide>
                <label className="block mb-2 font-medium">User Name</label>
              </Slide>
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="bg-purple-600 w-full border rounded-lg px-4 py-2  "
              />
            </div>
            <div>
              <Slide>
                <label className="block mb-2 font-medium">User Email</label>
              </Slide>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="bg-purple-600 w-full border rounded-lg px-4 py-2 "
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 ">
            Add Artwork
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddArtwork;
