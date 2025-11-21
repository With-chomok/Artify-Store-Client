import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";


const ArtworkDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [artwork, setArtwork] = useState(null);
  const [artistInfo, setArtistInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  //  Fetch artwork details
  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const res = await fetch(`http://localhost:5000/artworks/${id}`);
        const data = await res.json();
  
        setArtwork(data);

        //  Fetch artist info based on artist email
        const artistRes = await fetch(
          `http://localhost:5000/artworks?email=${data.userEmail}`
        );
        const artistData = await artistRes.json();
        setArtistInfo({
          name: data.userName,
          photo: data.image || "https://i.ibb.co/F3ZqWhN/default-user.png",
          total: artistData.length,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchArtwork();
  }, [id]);

  // Handle Like Button
  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:5000/artworks/like/${id}`, {
        method: "PATCH",
      });
      const data = await res.json();
      if (data.modifiedCount > 0) {
        toast.success("You liked this artwork!");
        setArtwork({ ...artwork, likes: (artwork.likes || 0) + 1 });
      }
    } catch {
      toast.error("Failed to like this artwork!");
    }
  };

  // Handle Add to Favorites
  const handleFavorite = async () => {
    if (!user) return toast.error("Please login first!");
    const favoriteData = {
      userEmail: user.email,
      artworkId: id,
      title: artwork.title,
      image: artwork.image,
      artist: artwork.userName,
    };


    try {
      const res = await fetch("http://localhost:5000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favoriteData),
      });
      if (res.ok) {
        toast.success("Added to Favorites!");
      } else {
        toast.error("Already in Favorites!");
      }
    } catch {
      toast.error("Failed to add favorite!");
    }
  };

  if (loading) {
    return <Loading/>
  }

  if (!artwork) {
    return <p className="text-center mt-10 text-red-500">Artwork not found!</p>;
  }

  return (
    <section className="min-h-screen  py-10 px-4">
      <div className="max-w-5xl mx-auto add-artwork-form rounded-2xl shadow-lg overflow-hidden">
        {/* Artwork Image */}
        <img
          src={artwork.image}
          alt={artwork.title}
          className="h-[450px] w-full object-center"
        />

        <div className="p-8 space-y-6">
          {/* Title and Artist */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-3xl font-bold">{artwork.title}</h2>
              <p className="text-lg  mt-1">
                by <span className="font-semibold ">{artwork.userName}</span>
              </p>
            </div>
            <div className="flex gap-3 mt-3 md:mt-0">
              <button
                onClick={handleLike}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                👍 Like ({artwork.likes || 0})
              </button>
              <button
                onClick={handleFavorite}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                ⭐ Add to Favorites
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className=" leading-relaxed">{artwork.description}</p>
          </div>

          {/* Artwork Info */}
          <div className="grid md:grid-cols-2 gap-4 ">
            <p><strong>Category:</strong> {artwork.category}</p>
            <p><strong>Medium:</strong> {artwork.medium}</p>
            {artwork.dimensions && <p><strong>Dimensions:</strong> {artwork.dimensions}</p>}
            {artwork.price && <p><strong>Price:</strong> ${artwork.price}</p>}
          </div>

          {/* Artist Info Section */}
        
          
          {artistInfo && (
            <div className="mt-10 border-t pt-6">
              <h3 className="text-xl font-semibold mb-4 ">Artist Info</h3>
              <div className="flex items-center gap-4">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-16 h-16 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold text-lg">{artistInfo.name}</p>
                  <p >
                    Total Artworks: <strong>{artistInfo.total}</strong>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArtworkDetails;
