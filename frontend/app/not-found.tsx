import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>The page is not found</h1>
        <Link style={{ color: "blue" }} href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
