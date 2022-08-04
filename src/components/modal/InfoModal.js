import { Modal } from "@mantine/core";
import "./InfoModal.css";

const InfoModal = ({ opened, setOpened }) => {
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
          />
          <input
            type="text"
            name="lastName"
            className="infoInput"
            placeholder="Your Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            name="worksAt"
            className="infoInput"
            placeholder="Where do you work?"
          />
        </div>

        <div>
          <input
            type="text"
            name="livesIn"
            className="infoInput"
            placeholder="Where do you live?"
          />
          <input
            type="text"
            name="Country"
            className="infoInput"
            placeholder="Country"
          />
        </div>

        <div>
          <input
            type="text"
            name="status"
            className="infoInput"
            placeholder="Your relationship status"
          />
        </div>

        <div>
          <input type="file" placeholder="Your profile image" />
          <input type="file" placeholder="Your cover image" />
        </div>

        <button className="button infoBtn">Update</button>
      </form>
    </Modal>
  );
};

export default InfoModal;
