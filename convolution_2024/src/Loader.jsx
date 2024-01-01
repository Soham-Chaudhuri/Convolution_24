import React from "react";
import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "0 auto",
  // borderColor: "red",
};

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="h-[100vh] z-50 flex items-center bg-[#f6eddf]">
      <div className="sweet-loading text-center mx-auto">
        <HashLoader color="#000" loading={loading} size={130} />
      </div>
    </div>
  );
}

export default Loader;
