import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/sections/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, ChevronDown, ArrowRight, GraduationCap} from 'lucide-react';
import "./index.css";
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
    <div
     className={`min-h-screen transition-opacity duration-700 ${
      isLoaded ? "opacity-100" : "opacity-0"
    } bg-black text-gray-100`}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
    <footer className="bg-black pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-medium text-white flex items-center justify-center md:justify-start gap-2">
              <Code size={20} />
              <span>Portfolio</span>
            </a>
            <p className="mt-2 text-gray-400 text-sm">Crafting digital experiences with precision.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="https://github.com/artyomkap" className="text-gray-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/artremkap/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:kapustintemka@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-gray-500 text-xs">© 2025 Artem Kapustin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </>
  );    
}



export default App;
