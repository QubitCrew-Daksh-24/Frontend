import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from '../../ActionProvider.js';
import MessageParser from '../../MessageParser.js';
import config from '../../config.js';
import './Chatbot.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={`button-toggle ${isOpen ? 'close' : 'open'}`} onClick={toggleChatbot}>
        {isOpen ? '×' : 'Qually'}
      </button>
      {isOpen && (
        <div className="copilot-ui">
          <div className="ui-body">
            <Chatbot
              className="chatbot-custom"
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
            <Carousel>
              <div>
                <img src={img1} alt="Product 1" />
                <p className="legend">Product 1</p>
              </div>
              <div>
                <img src={img2} alt="Product 2" />
                <p className="legend">Product 2</p>
              </div>
              <div>
                <img src={img3} alt="Product 3" />
                <p className="legend">Product 3</p>
              </div>
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
