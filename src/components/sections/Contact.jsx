import { RevealOnScroll}  from '../RevealOnScroll';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, ChevronDown, ArrowRight, GraduationCap} from 'lucide-react';
import emailjs from 'emailjs-com';
import { useState } from 'react';


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_o1xmi6g";
  const TEMPLATE_ID = "template_r73qq0g";
  const API_KEY = "NQRzrVzdi65L1l6UY";
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .send(SERVICE_ID, TEMPLATE_ID, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }, API_KEY)
    .then((result) => {
      alert("Message Sent!");
      setFormData({name: "", email: "", message: ""})
    })
    .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
  <section id='contact' className='min-h-screen items-center justify-center py-20'>
    <RevealOnScroll>
      <div className="grid grid-cols-1 px-4 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        <div>
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 
                        bg-clip-text text-transparent animate-gradient">Get in touch</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-1 ">
              <Mail className="mr-4 mt-1 text-blue-500 hover:text-blue-300 transition-colors" size={18} />
              <div>
                <h4 className="font-medium text-sm text-gray-200 mb-1">Email</h4>
                <a href="mailto:kapustintemka@gmail.com" className="text-gray-300 hover:text-white transition-colors">kapustintemka@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-1 ">
              <Linkedin className="mr-4 mt-1 text-blue-500 hover:text-blue-300 transition-colors" size={18} />
              <div>
                <h4 className="font-medium text-sm text-gray-200 mb-1">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/artremkap/" className="text-gray-300 hover:text-white transition-colors">linkedin.com/in/artremkap/</a>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Github className="mr-4 mt-1  text-blue-500 hover:text-blue-300 transition-colors" size={18} />
              <div>
                <h4 className="font-medium text-sm text-gray-200 mb-1">GitHub</h4>
                <a href="https://github.com/artyomkap" className="text-gray-300 hover:text-white transition-colors">github.com/artyomkap</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 
                        bg-clip-text text-transparent animate-gradient">Connect</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/artyomkap" className="w-10 h-10 rounded-full border border-blue-500 text-blue-500 flex items-center justify-center hover:text-blue-300 hover:border-blue-300 transition-all">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/artremkap/" className="w-10 h-10 rounded-full border border-blue-500 text-blue-500 flex items-center justify-center hover:text-blue-300 hover:border-blue-300 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:kapustintemka@gmail.com" className="w-10 h-10 rounded-full border border-blue-500 text-blue-500 flex items-center justify-center hover:text-blue-300 hover:border-blue-300 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 
                        bg-clip-text text-transparent animate-gradient">Send a message</h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                id="name" 
                name='name'
                value={formData.name}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder='Name...'
                onChange={(e) => setFormData({...formData, name: e.target.value })}
              />
            </div>
            <div>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                required
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message..."
                onChange={(e) => setFormData({...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 
                         text-white px-6 py-3 animate-gradient rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </RevealOnScroll>
  </section>
  );
}