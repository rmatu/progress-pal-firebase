import React from 'react';
import { MessageWrapper } from './Message.styles';

interface MessageProps {
  error?: boolean | null;
  success?: any;
  show?: string | boolean | null;
}

const Message: React.FC<MessageProps> = ({
  children,
  error,
  success,
  show,
}) => {
  return (
    <MessageWrapper error={error} success={success} show={show}>
      {children}
    </MessageWrapper>
  );
};

export default Message;
