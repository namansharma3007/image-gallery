import React from "react";
import { useFirestore } from "../hooks/useFirestore";

const ImageGallery = () => {
  const { docs, isLoading } = useFirestore("images");

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10 my-10">
      {docs.map((image, index) => (
        <div
          className="card card-compact w-max max-h-[20rem] bg-base-100 shadow-xl flex flex-col"
          key={index}
        >
          <figure className="max-h-[15rem] max-w-[15rem]">
            <img src={image.imageUrl} alt="Shoes" />
          </figure>
          <div className="card-body max-w-[15rem]">
            <div className="flex flex-col">
              <span className="break-all">Uploaded by: {image.userEmail}</span>
              <span>Created on: {image.createdAt.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
