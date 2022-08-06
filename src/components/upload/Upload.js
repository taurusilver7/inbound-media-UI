import React, { useRef, useState } from "react";
import "./Upload.css";
import ProfileImg from "../../img/profileImg.jpg";

import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";

const Upload = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  console.log(user);
  const descRef = useRef();

  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: descRef.current.value,
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("fille", image);

      newPost.image = fileName;
      console.log(newPost);
    }
  };

  const onImgChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  return (
    <div className="upload">
      <img src={ProfileImg} alt="" />

      <div className="uploadInput">
        <input
          required
          ref={descRef}
          type="text"
          placeholder="What's happening"
        />

        <div className="uploadBtns">
          <div
            onClick={() => imageRef.current.click()}
            className="uploadBtn"
            style={{ color: "var(--photo)" }}
          >
            <UilScenery />
            Image
          </div>
          <div className="uploadBtn" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="uploadBtn" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="uploadBtn" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button onClick={handleSubmit} className="button uploadButton">
            post
          </button>
          <div style={{ display: "none" }}>
            <input
              onChange={onImgChange}
              type="file"
              name="myImg"
              ref={imageRef}
            />
          </div>
        </div>

        {image && (
          <div className="preview">
            <UilTimes onClick={() => setImage(null)} />
            <img
              className="previewImg"
              src={URL.createObjectURL(image)}
              alt="upload_img"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
