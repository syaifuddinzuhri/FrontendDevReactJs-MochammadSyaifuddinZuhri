import { Modal, ModalOverlay, ModalContent, ModalBody, Text } from "@chakra-ui/react";
import SpinnerLoading from "./Loading/SpinnerLoading";

interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, onClose, text }) => {
  const modalStyle: React.CSSProperties = {
    position: "fixed",
    top: "40%",
    width: "240px",
    borderRadius: "3xl",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs" closeOnOverlayClick={false} isCentered={false}>
      <ModalOverlay />
      <ModalContent px={3} bg="transparent" boxShadow="none" style={modalStyle}>
        <ModalBody bg="#33B33C" py={4} rounded={"3xl"}>
          {/* Your modal content */}
          <SpinnerLoading />
          <Text textAlign="center" color="white" mt={4}>
            {text}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MyModal;
