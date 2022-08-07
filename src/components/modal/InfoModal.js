// Generalised model in the info Card in the Profile page.

import { Modal } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/upload";
import "./InfoModal.css";

const InfoModal = ({ opened, setOpened, data }) => {
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profilePicture"
        ? setProfilePicture(img)
        : setCoverPicture(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = formData;

    if (profilePicture) {
      const data = new FormData();
      const fileName = Date.now() + profilePicture.name;

      data.append("name", fileName);
      data.append("file", profilePicture);

      userData.profilePicture = fileName;

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverPicture) {
      const data = new FormData();
      const fileName = Date.now() + coverPicture.name;
      data.append("name", fileName);
      data.append("file", coverPicture);
      userData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch();
  };
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Your Info"
      overlayBlur={3}
      size="55%"
    >
      <form className="infoForm authForm">
        <div>
          <input
            type="text"
            name="firstName"
            className="infoInput"
            placeholder="Your First Name"
            onChange={handleChange}
            value={formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            className="infoInput"
            placeholder="Your Last Name"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

        <div>
          <input
            type="text"
            name="worksAt"
            className="infoInput"
            placeholder="work, or something about yourself?"
            onChange={handleChange}
            value={formData?.worksAt}
          />
        </div>

        <div>
          <input
            type="text"
            name="livesIn"
            className="infoInput"
            placeholder="Where do you live?"
            onChange={handleChange}
            value={formData?.livesIn}
          />
          <input
            type="text"
            name="country"
            className="infoInput"
            placeholder="Where are you from?"
            onChange={handleChange}
            value={formData?.country}
          />
        </div>

        <div>
          <input
            type="text"
            name="relationship"
            className="infoInput"
            placeholder="Your relationship status"
            onChange={handleChange}
            value={formData?.relationship}
          />
        </div>

        <div>
          <input type="file" name="profilePicture" onChange={handleImage} />
          <input type="file" name="coverPicture" onChange={handleImage} />
        </div>

        <button onClick={handleSubmit} className="button infoBtn">
          Update
        </button>
      </form>
    </Modal>
  );
};

export default InfoModal;
