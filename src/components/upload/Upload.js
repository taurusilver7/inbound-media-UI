import React, { useRef, useState } from "react";
import "./Upload.css";
import ProfileImg from "../../img/profileImg.jpg";

import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../actions/upload";
import { createPost } from "../../actions/post";

const Upload = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  // console.log(loading);

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const imageRef = useRef();
  const descRef = useRef();

  const resetPost = () => {
    setImage(null);
    descRef.current.value = "";
  };

  const onImgChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: descRef.current.value,
    };
    // If there is an image in the post, only activate.
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);

      newPost.image = fileName;
      console.log(newPost);

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    descRef.current.value !== "" && dispatch(createPost(newPost));
    resetPost();
  };

  return (
    <div className="upload">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.coverPicture
            : serverPublic + "defaultProfile.png"
        }
        alt="profile_pic"
      />

      <div className="uploadInput">
        <input
          required={true}
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
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="button uploadButton"
          >
            {loading ? "Uploading" : "Post"}
          </button>
          <div style={{ display: "none" }}>
            <input onChange={onImgChange} type="file" ref={imageRef} />
          </div>
        </div>

        {image && (
          <div className="preview">
            <UilTimes onClick={() => setImage(null)} />
            <img
              className="previewImg"
              src={URL.createObjectURL(image)}
              alt="preview"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
