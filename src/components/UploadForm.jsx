import React, { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
  const { startUpload, progress } = useStorage();

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
    <div className="my-10 flex flex-col items-center">
      {error && (
        <div role="alert" className="alert alert-error w-max my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <form
        className="flex items-center flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <button
          className={`btn btn-neutral gap-3 ${Boolean(progress) && "loading"}`}
          type="submit"
        >
          Upload
          <span className={Boolean(progress) ? "hidden" : ""}>🚀</span>
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
