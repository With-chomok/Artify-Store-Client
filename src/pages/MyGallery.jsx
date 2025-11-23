import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";

const MyGallery = () => {
  const { user } = useContext(AuthContext);
  const [myArtworks, setMyArtworks] = useState([]);
  const [selected, setSelected] = useState(null);

  // Load My Artworks
  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/artworks?email=${user.email}`,{
          headers:{
            authorization: `Bearer ${user.accessToken}`
          } 
        })
      .then((res) => res.json())
      .then((data) => setMyArtworks(data))
      .catch(() => toast.error("Failed to load artworks"));
  }, [user]);

  // Delete Artwork
  const handleDelete = async (id) => {
    const confirmDel = confirm("Are you sure you want to delete?");
    if (!confirmDel) return;

    const res = await fetch(`http://localhost:5000/artworks/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success("Artwork deleted!");
      setMyArtworks(myArtworks.filter((a) => a._id !== id));
    }
  };

  // Update Submit
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updated = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      price: form.price.value,
      dimensions: form.dimensions.value,
    };

    const res = await fetch(`http://localhost:5000/artworks/${selected._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updated),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success("Artwork updated!");
      document.getElementById("updateModal").close();
      reloadData();
    }
  };
  const openUpdateModal = (item) => {
    setSelected(item);

    setTimeout(() => {
      const modal = document.getElementById("updateModal");
      if (modal) modal.showModal();
    }, 0);
  };

  // Reload for updating UI
  const reloadData = () => {
    fetch(`http://localhost:5000/artworks?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyArtworks(data));
  };

  return (
    <div className="min-h-screen px-6 py-10 text-white">
      <h1 className="md:text-4xl text-2xl font-bold text-center mb-8">
        <Typewriter
          words={["My Gallery."]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={70}
          delaySpeed={1500}
        />
      </h1>

      {myArtworks.length === 0 && (
        <p className="text-center text-xl font-bold opacity-80">
          You haven’t added any artworks yet.
        </p>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {myArtworks.map((item) => (
          <div
            key={item?._id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-xl transition hover:scale-105 duration-700">
            <img
              src={item?.image}
              alt={item?.title}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h2 className="text-xl md:text-2xl mt-3 font-bold">{item?.title}</h2>
            <p className="text-sm opacity-80">{item?.category}</p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => openUpdateModal(item)}
                className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:opacity-90 transition">
                Update
              </button>

              <button
                onClick={() => handleDelete(item?._id)}
                className="bg-gradient-to-r from-red-900 via-red-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:opacity-90 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {selected && (
        <dialog
          id="updateModal"
          className="modal"
          onClose={() => setSelected(null)}>
          <div className="modal-box bg-white/20 backdrop-blur-3xl border border-white/20 text-white ">
            <h3 className="font-bold text-lg mb-4">Update Artwork</h3>

            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                type="text"
                name="title"
                value={selected?.title}
                onChange={(e) =>
                  setSelected({ ...selected, title: e.target.value })
                }
                className="w-full p-2 bg-white/10 rounded-lg"
              />

              <input
                type="text"
                name="category"
                value={selected?.category}
                onChange={(e) =>
                  setSelected({ ...selected, category: e.target.value })
                }
                className="w-full p-2 bg-white/10 rounded-lg"
              />

              <textarea
                name="description"
                value={selected?.description}
                onChange={(e) =>
                  setSelected({ ...selected, description: e.target.value })
                }
                className="w-full p-2 bg-white/10 rounded-lg"
              />

              <input
                type="text"
                name="dimensions"
                value={selected?.dimensions}
                onChange={(e) =>
                  setSelected({ ...selected, dimensions: e.target.value })
                }
                className="w-full p-2 bg-white/10 rounded-lg"
              />

              <input
                type="number"
                name="price"
                value={selected?.price}
                onChange={(e) =>
                  setSelected({ ...selected, price: e.target.value })
                }
                className="w-full p-2 bg-white/10 rounded-lg"
              />

              <button className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-xl shadow-md hover:opacity-90 transition">
                Update
              </button>
            </form>

            <form method="dialog" className="mt-3">
              <button className="w-full bg-gradient-to-r from-red-900 via-red-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-xl shadow-md hover:opacity-90 transition">
                Close
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyGallery;
