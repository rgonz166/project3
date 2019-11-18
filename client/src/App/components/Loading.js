import React from "react";
// import loading from "../assets/loading.svg";
import loading from "../assets/cart.webp";
const style = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '..', height: '..' }

const Loading = () => (
  < div className="spinner align-middle" style={style}>
    <img src={loading} alt="Loading" />
  </div >
);

export default Loading;
