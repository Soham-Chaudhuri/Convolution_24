/* eslint-disable react/prop-types */
// import React from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// toast.configure();

// function Success({ message }) {
//   toast.success(
//     { message },
//     {
//       position: toast.POSITION.TOP_RIGHT,
//       autoClose: false,
//     }
//   );
// }

// export default Success;


import React from 'react'

function Success({message}) {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default Success
