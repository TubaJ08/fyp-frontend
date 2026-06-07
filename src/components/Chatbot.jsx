import React, { useState } from "react";
import { Bot, X } from "lucide-react"; // optional icons, install with: npm install lucide-react

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/api/dialogflow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setIsTyping(false);

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Sorry, I didn't get that." },
        ]);
      }
    } catch (err) {
      console.error("Chatbot error:", err);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "AI service is currently unavailable." },
      ]);
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-2xl hover:scale-105 transition z-50"
        >
          <Bot size={20} />
        </button>
      )}

      {/* Chatbox */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 max-h-[550px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50 animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 flex justify-between items-center">
            <span className="font-bold">AI Assistant</span>
            <button onClick={() => setOpen(false)} className="hover:text-red-300">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-3 overflow-y-auto flex-1 space-y-2 bg-gray-50 max-h-[400px] scrollbar-thin scrollbar-thumb-gray-400">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`rounded-lg px-4 py-2 max-w-[75%] text-sm ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-100 text-right shadow"
                    : "mr-auto bg-gray-200 text-left shadow"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="mr-auto bg-gray-200 text-left px-4 py-2 rounded-lg text-sm text-gray-500 animate-pulse w-fit">
                Typing...
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex border-t p-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
