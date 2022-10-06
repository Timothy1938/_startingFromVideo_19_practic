import loadingImage from "../../asserts/images/Rocket.gif";
import React from "react";

export const Preloader = (props:any) => {
  return <span>
    <img src={loadingImage}/>
  </span>
}