'use client';
import { useState } from 'react';

// Define message type
type Message = {
  sender: 'user' | 'server';
  text: string;
};

const ChatButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userMessage, setUserMessage] = useState<string>('');
  const [isChatDisabled, setIsChatDisabled] = useState<boolean>(false);

  // Random greeting messages
  const greetings: string[] = [
    "Hi! How can we help you?",
    "Hello! Need any assistance?",
    "Hey there! How can I assist?",
  ];
  const randomGreeting: string = greetings[Math.floor(Math.random() * greetings.length)];

  // Open chat with a greeting message
  const openChat = (): void => {
    if (!isChatOpen) {
      setMessages([{ sender: "server", text: randomGreeting }]);
      setIsChatOpen(true);
      setIsChatDisabled(false)
    }
  };

  // Handle user message and disable chat
  const sendMessage = (): void => {
    if (userMessage.trim() !== "") {
      setMessages([
        ...messages,
        { sender: "user", text: userMessage },
        { sender: "server", text: "Please contact us through WhatsApp." }
      ]);
      setUserMessage("");
      setIsChatDisabled(true); // Disable further chat
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={openChat}
        className="fixed bottom-3 right-[60px] bg-[#f84e1d] text-white px-2 py-4 text-lg rounded-full shadow-lg z-50 hover:bg-blue-700 transition-all md:w-[4%] w-[20%]"
      >
        💬
      </button>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-[40%] h-[60%] bg-white border border-gray-300 shadow-2xl rounded-xl z-50">
          <div className="p-4 border-b bg-[#f84e1d] text-white font-bold flex justify-between items-center rounded-t-xl">
            Chat Support
            <button onClick={() => setIsChatOpen(false)} className="text-white w-[10%] p-3 font-bold text-lg rounded"><span className='text-light'>X</span></button>
          </div>
          <div className="p-4 h-full overflow-y-auto flex flex-col gap-2">
            {messages.map((msg, index) => (
              <div key={index} className={`p-3 rounded-lg max-w-[80%] ${msg.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-4 absolute bottom-1 border-t flex gap-2 bg-gray-100 rounded-b-xl w-full">
            <input
              type="text"
              className="flex-1 w-[90%] p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              disabled={isChatDisabled}
            />
            <button
              onClick={sendMessage}
              className={`px-4 py-3 w-[10%] rounded-lg text-white text-lg ${isChatDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#f84e1d] hover:bg-red-700"}`}
              disabled={isChatDisabled}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
