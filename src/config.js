import { createChatBotMessage } from 'react-chatbot-kit';
import MessageParser from './MessageParser';

const botName = 'Qually';

const config = {
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}`),
    {
      id: 'welcome-message',
      message: 'Welcome! How can I assist you today?',
      trigger: 'user-query'
    },
    {
      id: 'user-query',
      user: true,
      trigger: 'handle-user-query'
    },
    {
      id: 'handle-user-query',
      message: 'Processing your query...',
      trigger: async () => {
        await MessageParser.parse('CHAT_QUERY', ['pizza', ['gluten', 'dairy']]);
        return 'query-processed';
      }
    },
    {
      id: 'query-processed',
      message: 'Your query has been processed!',
      end: true
    }
  ],
  botName: botName,
};

export default config;
