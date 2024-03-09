import React from 'react';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleChatQuery = async (query, allergies) => {
    try {
      const response = await axios.post('http://localhost:5000/chat', {
        query,
        allergies
      });

      const responseData = response.data;

      
      const botMessage = createChatBotMessage(responseData.response);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));

    } catch (error) {
      console.error('Error fetching chat response:', error);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleChatQuery,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
