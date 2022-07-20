import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "./Context";

export default function useImgPics(imgId) {
  const { sideImgUrl, imgLinks } = useContext(Context);
  const ref = useRef();

  function addImg(imgId) {
    const sideImgUrl = imgLinks[1];
    console.log(sideImgUrl);
  }

  function removeImg() {
    let sideImgUrl = imgLinks[0];
    console.log("running");
  }

  useEffect(() => {});
  ref.current.addEventListener("hover", addImg(imgId));
  ref.current.addEventListener("mouseleave", removeImg());

  //pass a ref and a url ?
  return [sideImgUrl, ref];
}
[];
