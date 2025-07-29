import React from "react";

function Map() {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
      <iframe
        title="GameForge Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8943966476622!2d72.86194017512511!3d19.112288182099782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83ee932dced%3A0x2406a5595c94b1af!2sNVIDIA%20Graphics%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1753762243393!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
