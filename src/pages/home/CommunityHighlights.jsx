import React from "react";

const CommunityHighlights = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-8">Community Highlights</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-xl p-6 shadow">
          <h3 className="font-bold text-xl mb-2">🎨 10K+ Artworks Shared</h3>
          <p className="text-gray-600">
            Thousands of beautiful creations by artists worldwide.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6 shadow">
          <h3 className="font-bold text-xl mb-2">🌍 Global Community</h3>
          <p className="text-gray-600">
            Artists from 50+ countries sharing inspiration daily.
          </p>
        </div>
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6 shadow">
          <h3 className="font-bold text-xl mb-2">💬 Artify Talks</h3>
          <p className="text-gray-600">
            Join weekly discussions and art appreciation events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
