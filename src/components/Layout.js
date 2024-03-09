import React from 'react';
import Chatbot from 'react-chatbot-kit'; 
import 'react-chatbot-kit/build/main.css'
import ActionProvider from '../ActionProvider.js';
import MessageParser from '../MessageParser.js';
import config from '../config.js';

const Layout = ({ children }) => {
 return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      {children}
    </div>
 );
};

export default Layout;
