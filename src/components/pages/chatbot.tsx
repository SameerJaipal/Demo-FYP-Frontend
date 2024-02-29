import React, { useEffect, useRef, useState } from 'react';
import './chatbot.css'; // Update the import path to your CSS file
import logo from "../../assests/chatgpt.svg";
import addBtn from "../../assests/add-30.png";
import msgIcon from "../../assests/message.svg";
import home from "../../assests/home.svg";
import saved from "../../assests/bookmark.svg";
import rocket from "../../assests/rocket.svg";
import sendBtn from "../../assests/send.svg";
import userIcon from "../../assests/user-icon.png";
import gptImgLogo from "../../assests/chatgptLogo.svg";
import { sendMsgToOpenAi } from '../../openai';
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Chatbot() {
  const msgEnd = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const [input, setInput] = useState("");
  const [messages , setMessages] = useState([
    {
      text: "Hello I am ChatGPT",
      isBot:true,
    }
  ]);
  useEffect(()=>{
    msgEnd.current.scrollIntoView();
  }, [messages])

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text, isBot:false}
    ])
    const res =  await sendMsgToOpenAi(text);
    setMessages([
      ...messages,
      {text, isBot:false},
      {text:res, isBot:true}
    
    ])
  }
  const handleEnter = async (e) => {
    if(e.key === 'Enter') await handleSend();
  }
  
  return (
    <div className='App' >

      <BackgroundGradientAnimation>
        <div className='sidebar'>
          <div className='upperside'>
            <div className='upperSideTop'> <img src={logo} alt="Logo" className="logo" />  <span className='brand'> Tax Tajweez</span>  </div>
            <button className="midBtn" onClick={() => {window.location.reload()}}><img src={addBtn} alt="New Chat" className="addBtn" /> New Chat</button>
            <div className="upperSideButtom">
              <button className="query"><img src={msgIcon} alt="Query" className="" />Query 1</button>
              <button className="query"><img src={msgIcon} alt="Query" className="" />Query 2</button>
            </div>
          </div>
          <div className='lowerside'>
            <div className="listitems"><img src={home} alt="Home" className="listitemsImg" />Home</div>
            <div className="listitems"><img src={saved} alt="Saved" className="listitemsImg" />Saved</div>
            <div className="listitems"><img src={rocket} alt="Upgrade" className="listitemsImg" />Upgrade to Pro</div>
          </div>
        </div>
      </BackgroundGradientAnimation>
  
      <div className='main'>
        
        <div className="chats">
          {messages.map((message, i)=>
            <div key={i} className={message.isBot?"chat bot":"chat"}>
              <img src={message.isBot? gptImgLogo:userIcon} className= 'chatimg' alt="ChatGPT" /> <p className="txt">{message.text}</p>
            </div>
          )}
          <div ref={msgEnd}/>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message...' value={input} onKeyDown={handleEnter} onChange={(e) => {setInput(e.target.value)}}/> <button className="send" onClick={handleSend}><img src={sendBtn} alt="" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version.</p>
        </div>
      </div>
    </div>
  );
}
