import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activePage, setActivePage] = useState("home");
  
  // AI Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Welcome to Agency! 🖤 How can I help you with our Old Money & Urban collections today?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const newMessages = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);
    setInputValue("");

    setTimeout(() => {
      let aiReply = "That's a great question! Our pieces are designed for timeless elegance and urban comfort. Feel free to explore the Shop tab!";
      
      const lower = userText.toLowerCase();
      if (lower.includes("size") || lower.includes("fit")) {
        aiReply = "Our items feature a tailored yet relaxed fit suited for unisex styling. Check out our product descriptions for specific sizing guides!";
      } else if (lower.includes("old money") || lower.includes("style")) {
        aiReply = "Our old money collection blends classic heritage tailoring with modern streetwear aesthetics. Perfect for any upscale or casual setting.";
      } else if (lower.includes("shipping") || lower.includes("delivery")) {
        aiReply = "We offer worldwide shipping! Standard delivery takes 3-5 business days.";
      }

      setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden relative">
      
      {/* Navigation - Restored Agency */}
      <nav className="flex justify-between items-center p-8 border-b border-gray-800">
        <button 
          onClick={() => setActivePage("home")} 
          className="text-xl font-bold tracking-tighter hover:opacity-80 transition cursor-pointer"
        >
          Agency.
        </button>
        <div className="space-x-6 text-sm text-gray-400 flex">
          <button 
            onClick={() => setActivePage("shop")} 
            className={`${activePage === "shop" ? "text-white font-bold" : ""} hover:text-white transition cursor-pointer`}
          >
            Shop
          </button>
          <button 
            onClick={() => setActivePage("about")} 
            className={`${activePage === "about" ? "text-white font-bold" : ""} hover:text-white transition cursor-pointer`}
          >
            About
          </button>
          <button 
            onClick={() => setActivePage("contact")} 
            className={`${activePage === "contact" ? "text-white font-bold" : ""} hover:text-white transition cursor-pointer`}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow">
        
        {/* ================= HOME PAGE ================= */}
        {activePage === "home" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 80, letterSpacing: "-0.15em" }}
                animate={{ opacity: 1, y: [0, -15, 0], letterSpacing: "-0.025em" }}
                transition={{ 
                  y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  letterSpacing: { duration: 3.5, ease: "easeOut" }, opacity: { duration: 2.5 }
                }}
                className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight mt-12"
              >
                <span className="relative inline-block text-white">
                  Style
                  <motion.span
                    animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1.2, 0.6], rotate: [0, 15, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute -top-4 -right-10 md:-top-6 md:-right-14 text-yellow-400 text-4xl md:text-6xl"
                  >
                    ✨
                  </motion.span>
                </span>{" "}
                as unique <br/>
                <span className="text-gray-400">as you are.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl"
              >
                <span className="relative inline-block text-white font-semibold">
                  Premium
                  <motion.span
                    animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1.2, 0.6], rotate: [0, -15, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-2 -right-5 text-yellow-400 text-lg md:text-xl"
                  >
                    ✨
                  </motion.span>
                </span>{" "}
                quality apparel designed to elevate your everyday look. Discover our latest drops and exclusive collections.
              </motion.p>
              
              <motion.button
                onClick={() => setActivePage("shop")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="mt-12 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition inline-block cursor-pointer"
              >
                Enter the Store
              </motion.button>
            </main>

            <section className="px-8 py-24 bg-white text-black rounded-t-[3rem] mt-12">
              <div className="max-w-7xl mx-auto">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
                >
                  Featured Products.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="group cursor-pointer">
                    <div className="w-full bg-gray-200 overflow-hidden rounded-xl mb-6">
                       <img src="/new-arrival.png" alt="New Arrival Offer" className="w-full h-auto group-hover:scale-105 transition duration-700 ease-in-out"/>
                    </div>
                    <h3 className="text-2xl font-bold">New Arrival</h3>
                    <p className="text-gray-600 mt-2"><strong className="text-gray-900">Offer 55%</strong> so shop now</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="group cursor-pointer md:mt-24">
                    <div className="w-full bg-gray-200 overflow-hidden rounded-xl mb-6">
                      <video src="/fashion-sale.mp4" autoPlay loop muted playsInline className="w-full h-auto group-hover:scale-105 transition duration-700 ease-in-out"/>
                    </div>
                    <h3 className="text-2xl font-bold">Fashion Sale</h3>
                    <p className="text-gray-600 mt-2"><strong className="text-gray-900">Classic Suit</strong> 20% Off</p>
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* ================= SHOP PAGE ================= */}
        {activePage === "shop" && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="px-8 py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">The Collection.</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group cursor-pointer">
                  <div className="w-full h-[400px] bg-gray-900 overflow-hidden rounded-xl mb-4">
                    <img src="/new-arrival.png" alt="New Arrival" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out opacity-80 group-hover:opacity-100"/>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold">New Arrival Fit</h4>
                    <span className="text-red-400 font-bold tracking-wide">55% OFF</span>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="w-full h-[400px] bg-gray-900 overflow-hidden rounded-xl mb-4">
                    <video src="/fashion-sale.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out opacity-80 group-hover:opacity-100"/>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold">Classic Suit</h4>
                    <span className="text-red-400 font-bold tracking-wide">20% OFF</span>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="w-full h-[400px] bg-gray-900 overflow-hidden rounded-xl mb-4">
                    <video src="/new-drop.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out opacity-80 group-hover:opacity-100"/>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold">Scoop Hoddie</h4>
                    <span className="text-white font-bold tracking-wide">JUST DROPPED</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* ================= ABOUT PAGE ================= */}
        {activePage === "about" && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="px-8 py-32 min-h-[80vh] flex flex-col justify-center bg-zinc-900 text-white">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                The Agency Ethos.
              </h2>
              <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed">
                Welcome to Agency. We are a premium clothing brand dedicated to redefining modern apparel. Our collections seamlessly bridge the gap between the timeless, sophisticated elegance of <strong className="text-white">old money fashion</strong> and the bold, dynamic edge of <strong className="text-white">urban streetwear</strong>.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                We believe that true style knows no boundaries. That is why we meticulously design versatile, high-end <strong className="text-white">unisex garments and dresses</strong> that offer exceptional fit and ultimate comfort for everyone. Every piece is crafted with uncompromising attention to detail, ensuring you feel confident, empowered, and deeply satisfied with your wardrobe. From the streets to the estates, Agency provides the statement pieces to express your unique identity.
              </p>
            </div>
          </motion.section>
        )}

        {/* ================= CONTACT PAGE ================= */}
        {activePage === "contact" && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="px-8 py-32 min-h-[80vh] flex flex-col justify-center bg-white text-black">
            <div className="max-w-4xl mx-auto text-center w-full">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                Let's Talk.
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                Have a question about our latest drops? Reach out and we'll get back to you shortly.
              </p>

              <form className="flex flex-col gap-6 text-left max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6">
                  <input type="text" placeholder="Your Name" className="w-full bg-gray-100 border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-black transition" />
                  <input type="email" placeholder="Your Email" className="w-full bg-gray-100 border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-black transition" />
                </div>
                <textarea placeholder="Your Message" rows="5" className="w-full bg-gray-100 border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-black transition"></textarea>
                <button type="button" className="w-full bg-black text-white font-bold py-4 px-10 rounded-full hover:bg-gray-800 transition cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>
          </motion.section>
        )}

      </div>

      {/* ================= FLOATING AI CHATBOT WIDGET ================= */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="w-80 md:w-96 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4"
            >
              <div className="bg-black p-4 flex justify-between items-center border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                  <h4 className="font-bold text-sm text-white">Agency AI Assistant</h4>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-400 hover:text-white text-lg font-bold px-2 cursor-pointer"
                >
                  &times;
                </button>
              </div>

              <div className="p-4 h-72 overflow-y-auto flex flex-col gap-3 text-sm">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`max-w-[80%] p-3 rounded-xl ${
                      msg.sender === "user" 
                        ? "bg-white text-black ml-auto rounded-br-none" 
                        : "bg-zinc-800 text-gray-200 mr-auto rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-3 bg-black border-t border-zinc-800 flex gap-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about styles, sizing..." 
                  className="flex-grow bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-white"
                />
                <button 
                  type="submit" 
                  className="bg-white text-black font-bold px-4 py-2 rounded-xl text-sm hover:bg-gray-200 transition cursor-pointer"
                >
                  Send
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-white text-black p-4 rounded-full shadow-2xl font-bold flex items-center justify-center cursor-pointer border border-zinc-300"
        >
          💬
        </motion.button>
      </div>

      {/* Footer */}
      <footer className="bg-white text-black text-center py-12 border-t border-gray-200">
        <p className="text-gray-500 text-sm">© 2026 Agency. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;