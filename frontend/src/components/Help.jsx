import React, { useState } from "react";
import axios from "axios";

const Help = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    
    setChatHistory((prev) => [...prev, { sender: "user", text: message }]);

    try {
      const response = await axios.post("http://localhost:4000/app/helpbot/bot", {
        question: message,
      });
       console.log(response.data.data)
      const botAnswer = response.data.data;
      setChatHistory((prev) => [...prev, { sender: "bot", text: botAnswer }]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setChatHistory((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    }

    setMessage(""); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-[#b17457] mb-4">Chatbot</h1>

        {/* Chat History */}
        <div className="h-64 overflow-y-auto border border-gray-200 rounded-lg p-3 mb-4">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg ${
                chat.sender === "user"
                  ? "bg-blue-100 text-blue-800 self-end"
                  : "bg-gray-100 text-gray-800 self-start"
              }`}
            >
              <p>{chat.text}</p>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-[#b17457]"
          />
          <button
            onClick={sendMessage}
            className="bg-[#b17457] text-white px-4 py-2 rounded-lg hover:bg-[#9c644a] transition duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
