import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, ChevronDown, ArrowRight, GraduationCap} from 'lucide-react';
import { RevealOnScroll}  from '../RevealOnScroll';


export const About = () => {
  const frontendSkills = ["React", "Vue", "Node", "JQuery", "HTML", "CSS", "JavaScript"];
  const backendSkills = ["Python", "Django", "ASP.NET", "Aiogram", "Flask", "FastAPI", "SQL"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4 text-center"> {/* Центрирование текста */}
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 
                        bg-clip-text text-transparent animate-gradient">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        <div className="flex justify-center mb-6 overflow-hidden">
          <img 
            src="/assets/123213131qeqweq.jpg" 
            className="w-60 h-60 rounded-full shadow-lg object-cover"
          />
        </div>





          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable 
            web and software applications and creating innovative solutions.
          </p>

          {/* Две колонки для Frontend и Backend */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-center">Frontend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {frontendSkills.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,236,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-center">Backend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {backendSkills.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,236,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
      </RevealOnScroll>
    </section>
  );
};
