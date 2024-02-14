import React from "react";
import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";
import ImageGalary from "../components/ImageGalary";

const Home = () => {
  
  return (
    <div className="w-screen">
      <Navbar />
      <UploadForm />
      <ImageGalary/>
    </div>
  );
};

export default Home;
