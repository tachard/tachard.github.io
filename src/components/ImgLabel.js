import React from "react";

const ImgLabel = ({ src, alt, label }) => {
  return (
    <div className="my-2 d-flex flex-column align-items-center">
      <img src={src} alt={alt} class="object-fit-contain w-100 rounded" />
      <p class="fst-italic mt-1">{label}</p>
    </div>
  );
};

export default ImgLabel;
