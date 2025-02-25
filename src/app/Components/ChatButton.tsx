'use client';
import { useState, useEffect, useRef } from 'react';

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
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Random greeting messages
  const greetings: string[] = [
    "Hi! How can we help you?",
    "Hello! Need any assistance?",
    "Hey there! How can I assist?",
  ];

  // Auto-scroll to the last message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Open chat with a welcome message (but AI won't respond automatically)
  const openChat = (): void => {
    if (!isChatOpen) {
      const randomGreeting: string = greetings[Math.floor(Math.random() * greetings.length)];
      setMessages([{ sender: "server", text: randomGreeting }]);
      setIsChatOpen(true);
      setIsChatDisabled(false);
    }
  };

  // Fetch AI response
  const getAIResponse = async (message: string): Promise<string> => {
    const apiKey = process.env.OPENAI_SECRET_KEY;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: `You are a professional chat support representative for a concrete repair, foundation recovery, and waterproofing company. Your goal is to assist customers by providing clear, friendly, and informative responses about the services offered. Always be professional, approachable, and helpful.

If a customer inquires about:

Concrete Repair:
- Explain services like Driveway Concrete Leveling, Porch & Patio Leveling, Basement Floor Leveling, Garage Floor Leveling, Sidewalk Leveling, Void Fill, Road and Highway Leveling, Mudjacking, and Concrete Caulking Services.
- Offer insights into how these solutions restore safety, appearance, and durability.
- If relevant, suggest scheduling an inspection for an accurate assessment.

Foundation Recovery:
- Cover Helical Piers, Wall Stabilization, Crack Repair, Floor Stabilizers & Joist Support, Egress Window Installation & Repair, and Micropiles.
- Address concerns about foundation settling, wall cracks, and structural integrity.
- Emphasize long-term stability and recommend expert evaluation if needed.

Waterproofing:
- Detail Sump Pump Installation, Basement Perimeter Drains, Crawlspace & Basement Encapsulation, and Foundation Leak Repair.
- Explain how these services prevent water damage, mold growth, and structural issues.
- Offer guidance on keeping basements dry and foundation walls secure.
- Maintain a helpful and engaging tone, ensuring customers feel confident about reaching out for further details or scheduling a service consultation.` }, 
        { role: "user", content: message }],
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  };

  // Handle user message and send to AI
  const sendMessage = async (): Promise<void> => {
    if (userMessage.trim() !== "") {
      const userMsg: Message = { sender: "user", text: userMessage };
      setMessages((prevMessages) => [...prevMessages, userMsg]);
      setUserMessage("");
      setIsChatDisabled(true);
      setIsTyping(true);

      const aiResponse = await getAIResponse(userMessage);

      setMessages((prevMessages) => [...prevMessages, { sender: "server", text: aiResponse }]);
      setIsChatDisabled(false);
      setIsTyping(false);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isChatDisabled) {
      sendMessage();
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
        <div className="fixed bottom-20 right-6 w-[90%] md:w-[40%] h-[60%] bg-white border border-gray-300 shadow-2xl rounded-xl z-50">
          <div className="p-4 border-b bg-[#f84e1d] text-white font-bold flex justify-between items-center rounded-t-xl">
            Chat Support 
            <button onClick={() => setIsChatOpen(false)} className="text-white w-[10%] p-3 font-bold text-lg rounded">X</button>
          </div>
          <div className="p-4 h-[70%] overflow-y-scroll flex flex-col gap-2">
            {messages.map((msg, index) => (
              <div key={index} className={`p-3 rounded-lg max-w-[80%] ${msg.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"}`}>
              {msg.text.replace(/\*\*/g, "")}

              </div>
            ))}
            {isTyping && <div className="p-3 text-gray-500 self-start">Typing...</div>}
            <div ref={messagesEndRef} /> {/* Auto-scroll anchor */}
          </div>
          <div className="p-4 absolute bottom-1 border-t flex gap-2 bg-gray-100 rounded-b-xl w-full">
            <input
              type="text"
              className="flex-1 md:w-[90%] w-[80%] p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown} // Handle Enter key press
              disabled={isChatDisabled}
            />
            <button
              onClick={sendMessage}
              className={`px-4 py-3 md:w-[10%] w-[20%] rounded-lg text-white text-lg ${isChatDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#f84e1d] hover:bg-red-700"}`}
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
