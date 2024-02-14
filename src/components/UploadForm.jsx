import React, { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
  const {startUpload, progress} = useStorage();

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        setError(null);
      } else {
        setSelectedFile(null);
        setError("Please select an image as a file.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      startUpload(selectedFile);
    }
    setSelectedFile(null);
  };
  return (
    <div className="text-center my-10">
      {error && <span className="text-xl text-red-600 font-bold">{error}</span>}
      <form
        className="flex items-center flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <button className={`btn btn-neutral gap-3 ${Boolean(progress) && "loading"}`} type="submit">
          Upload
          <span className={Boolean(progress) ? "hidden" : ""}>🚀</span>
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
