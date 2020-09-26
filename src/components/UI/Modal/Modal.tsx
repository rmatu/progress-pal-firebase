import React from 'react';
import ReactDOM from 'react-dom';

import { WrappedModal } from './Modal.styles';
import Backdrop from './Backdrop/Backdrop';

interface ModalProps {
  opened: boolean;
  close: () => void;
  children: React.ReactNode | React.ReactNode[];
}

//This will be rerender only if the props changes
const Modal = React.memo<ModalProps>(
  ({ opened, children, close }) => {
    return ReactDOM.createPortal(
      <>
        <Backdrop opened={opened} close={close} />
        <WrappedModal opened={opened}>{children}</WrappedModal>
      </>,
      //@ts-ignore
      document.getElementById('root-modal')
    );
  },
  (prevProps, nextProps) => {
    //if this returns false it will update
    return prevProps.opened === nextProps.opened;
  }
);

export default Modal;
