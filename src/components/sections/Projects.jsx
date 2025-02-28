import { Github } from 'lucide-react';
import { RevealOnScroll}  from '../RevealOnScroll';


export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
            <h3 className='text-xl font-bold mb-2'>Telegram Bot Builder</h3>
            <p className='text-gray-400 mb-4'>A full-fledged Telegram Bot, which has all the necessary functionality for creating and managing telegram bots,
               without requiring knowledge of programming and structure from users.</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {["Python", "Aiogram", "SQLAlchemy", "TelegramBotAPI"].map((tech, key) => (
                <span key={key} className="bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient text-black py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-1 text-blue-500 hover:text-blue-400 transition-colors">
              <a href="https://github.com/artyomkap/Telegram-Bot-Builder" className="flex items-center">
                GitHub
                <Github className="ml-1" size={18} />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
            <h3 className='text-xl font-bold mb-2'>Voice Assistant for Students</h3>
            <p className='text-gray-400 mb-4'>A fully functional voice assistant that recognizes the human voice and commands. 
              Has the ability to control the sound in the system, search for information on the Internet and get a schedule for the university</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {["Python", "PyTorch", "Silero", "Picovoice", "PyTTSX3"].map((tech, key) => (
                <span key={key} className="bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient text-black py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-1 text-blue-500 hover:text-blue-400 transition-colors">
              <a href="https://github.com/artyomkap/Voice-Assistant-for-students" className="flex items-center">
                GitHub
                <Github className="ml-1" size={18} />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
            <h3 className='text-xl font-bold mb-2'>E-Commerce Website "Graphic Dream"</h3>
            <p className='text-gray-400 mb-4'>Online store for buying video cards,
               with light and dark themes, as well as support for adaptability. Has a full-fledged admin panel for managing users and products.</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {["ASP.NET", "C#", "SQLite", "MVC", "Razor Pages"].map((tech, key) => (
                <span key={key} className="bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient text-black py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-1 text-blue-500 hover:text-blue-400 transition-colors">
              <a href="https://github.com/artyomkap/Website-with-NET-" className="flex items-center">
                GitHub
                <Github className="ml-1" size={18} />
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
            <h3 className='text-xl font-bold mb-2'>Personal Portfolio website</h3>
            <p className='text-gray-400 mb-4'>The web page is completely built on the ReactJs + Vite framework, 
              has full adaptability for different devices and a beautiful modern design.</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {["React", "Javascript", "Vite", "HTML", "CSS"].map((tech, key) => (
                <span key={key} className="bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient text-black py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-1 text-blue-500 hover:text-blue-400 transition-colors">
              <a href="https://github.com/artyomkap/beautiful-portfolio" className="flex items-center">
                GitHub
                <Github className="ml-1" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
