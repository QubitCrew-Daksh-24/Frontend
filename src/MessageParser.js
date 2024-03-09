import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = async (message) => {
    const { action, args } = message;
    switch (action) {
      case 'CHAT_QUERY':
        await actions.handleChatQuery(...args);
        break;
      default:
        console.log(`No matching action found for ${action}`);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
