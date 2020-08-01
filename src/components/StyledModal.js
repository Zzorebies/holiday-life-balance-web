import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement(document.getElementById('root'));

const ReactModalAdapter = ({
  className,
  modalClassName,
  overlayClassName,
  ...props
}) => (
  <Modal
    className={modalClassName}
    portalClassName={className}
    overlayClassName={overlayClassName}
    {...props}
  />
);

export const StyledModal = styled(ReactModalAdapter).attrs({
  modalClassName: 'Modal',
  overlayClassName: 'Overlay'
})`
  & .Modal {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    border: 1px solid #ccc;
    background: #fff;
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 20px;
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

export default StyledModal;
