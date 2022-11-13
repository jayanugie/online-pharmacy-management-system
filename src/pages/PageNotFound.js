import React from "react";

const PageNotFound = () => {
  return (
    <div className="m-16 text-center space-y-2">
      <h1 className="text-4xl m-5">Page Not Found</h1>
      <a href="/dashboard" className="border p-1 rounded-md hover:bg-gray-100">Back to home</a>
    </div>
  );
};

export default PageNotFound;
