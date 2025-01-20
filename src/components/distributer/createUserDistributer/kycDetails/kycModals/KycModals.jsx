import { Modal } from 'antd';
import React, { useRef } from 'react';

function KycModals({ open, setOpen, kycVideo }) {
  const videoRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleOk = () => {
    setOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleCancel = () => {
    setOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
    <Modal
      title="KYC VIDEO"
      centered
      visible={open}
      // onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      afterClose={handleClose}
    >
      <picture>
        <video src={kycVideo} width="100%" controls autoPlay ref={videoRef} type="video/mp4" />
      </picture>
    </Modal>
    
    </>
  );
}

export default KycModals;
