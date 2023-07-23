import { useRouteLoaderData } from 'react-router-dom'
import { useAccount, useNetwork } from 'wagmi'
import DaoInfo from '../components/DaoInfo'
import WalletConnect from '../components/WalletConnect'
import ErrorMessage from '../components/ErrorMessage'
import { useState } from 'react'
import './Channel.css';

function Channel() {
  const { dao } = useRouteLoaderData('dao')
  const { address } = useAccount()
  const { chain } = useNetwork()
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);



  if (!chain || !address) {
    return (
      <>
        <DaoInfo dao={dao} />
        <WalletConnect />
      </>
    )
  }

  if (!(chain.id in dao.contracts)) {
    return (
      <>
        <DaoInfo dao={dao} />
        <ErrorMessage
          error={{ message: `Chain ${chain.name} not supported` }}
        />
      </>
    )
  }
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        text: message,
        sender: 'You', // Assume the current user sends the message
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    }
  };



  return (
    <>
      
      <div className="App">
      <header className="Header">
      <DaoInfo dao={dao} />
      </header>
      <div className="ChatHistory">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === 'You' ? 'SentMessage' : 'ReceivedMessage'}>
            <span className="MessageSender">{msg.sender}: </span>
            {msg.text}
          </p>
        ))}
      </div>
      <div className="InputContainer">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send message</button>
      </div>
      <footer className="Footer"></footer>
    </div>
    </>
  )
}

export default Channel
