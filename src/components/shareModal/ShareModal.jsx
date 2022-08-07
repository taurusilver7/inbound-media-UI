// Modal for Share button in the Suggestions.

import { Modal } from "@mantine/core";
import Upload from "../upload/Upload";

const ShareModal = ({ opened, setOpened }) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Your Trends"
      overlayBlur={3}
      size="55%"
    >
      <Upload />
    </Modal>
  );
};

export default ShareModal;
