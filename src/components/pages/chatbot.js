import React, { useEffect, useRef, useState } from 'react';
import './chatbot.css'; // Update the import path to your CSS file
import logo from "../../assets/chatgpt.svg";
import addBtn from "../../assets/add-30.png";
import msgIcon from "../../assets/message.svg";
import home from "../../assets/home.svg";
import saved from "../../assets/bookmark.svg";
import rocket from "../../assets/rocket.svg";
import sendBtn from "../../assets/send.svg";
import userIcon from "../../assets/user-icon.png";
import gptImgLogo from "../../assets/chatgptLogo.svg";
import { sendMsgToOpenAi } from '../../openai';

export default function Chatbot() {
  const msgEnd = useRef(null);

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
      {text, isBot:true}
    
    ])
  }
  const handleEnter = async (e) => {
    if(e.key == 'Enter') await handleSend();
  }
  
  return (
    <div className='App' >
    {/* <div className="screen"> */}

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
      <div className='main'>
          <div className="chats">
            {/* <div className="chat">
              <img src={userIcon} className='chatimg' alt="" /> <p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos minima debitis cumque rem totam incidunt recusandae praesentium libero dolor ut?</p>
            </div>

            <div className="chat bot">
              <img src={gptImgLogo} className= 'chatimg' alt="" /> <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat iure dolores, quaerat atque labore fugit nihil. Suscipit rerum dolorum omnis fugit, assumenda qui sint, fuga laudantium minima quasi odit dicta voluptas tempora labore officiis unde pariatur similique. Pariatur eius aspernatur accusantium perferendis earum neque ab velit amet magnam dolorem? Quo cupiditate quos perferendis omnis expedita minus perspiciatis ipsum saepe, eos, vitae praesentium! Officia voluptatibus vitae, adipisci non cum magni temporibus eligendi rerum impedit eos animi sint aliquid aliquam! Sit dignissimos dolores tempore, ut laborum autem, voluptates asperiores nemo doloribus velit cupiditate nesciunt magni, odio tempora nihil numquam voluptatem necessitatibus.</p>
            </div> */}
            {messages.map((message, i)=>
              <div key={i} className={message.isBot?"chat bot":"chat"}>
                <img src={message.isBot? gptImgLogo:userIcon} className= 'chatimg' alt="" /> <p className="txt">{message.text}</p>
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
      {/* </div> */}
    </div>
    
  );
}
