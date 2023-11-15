
import { useState } from 'react';
import { Button, Modal } from  'antd';
import './Modal.css';
import File from './File.js';

const Modall = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className="button" type="primary" onClick={showModal} >
       New Sales Invoice
      </Button>
      <Modal
        title="Upload File as your wish"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <File/>
      </Modal>
    </>
  );
};
export default Modall;


