import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<null | 'success' | 'submitting' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this string with your actual Web3Forms Access Key
          access_key: "853b20e4-f662-4171-88e6-fc92f57c393c",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(null), 3000);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen py-20 bg-obsidian-900 relative border-t border-white/5 flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4">
            <span className="text-neon-cyan">05. </span>Get In Touch
          </h2>
          <div className="w-24 h-1 bg-neon-cyan rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's talk about your project</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              {portfolioData.contact.description}
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center text-neon-cyan text-xl">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                  <a href={`mailto:${portfolioData.contact.email}`} className="text-lg hover:text-neon-cyan transition-colors">
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-white text-lg mb-6">Connect with me</h4>
              <div className="flex gap-4">
                {portfolioData.contact.social.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 rounded-lg bg-obsidian-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-obsidian-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-obsidian-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-obsidian-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full mt-4 bg-neon-cyan text-obsidian-900 font-bold text-lg py-4 rounded-lg hover:bg-neon-teal transition-all flex justify-center items-center gap-2 relative overflow-hidden group"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2"><i className="fa-solid fa-circle-notch fa-spin"></i> Sending...</span>
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2"><i className="fa-solid fa-check"></i> Message Sent!</span>
                ) : status === 'error' ? (
                  <span className="flex items-center gap-2 text-red-500"><i className="fa-solid fa-xmark"></i> Failed to send</span>
                ) : (
                  <>
                    Send Message 
                    <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
