import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, ChevronDown, ArrowRight, GraduationCap} from 'lucide-react';
import { RevealOnScroll}  from '../RevealOnScroll';


export const Education = () => {

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4 text-center"> {/* Центрирование текста */}
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 
                        bg-clip-text text-transparent animate-gradient">
          Education and Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all text-left shadow-lg">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="relative pl-8 border-l border-gray-700/30 flex text-gray-300 flex-col justify-start">
              <div className="absolute left-[-4px] top-0 w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="mb-2 flex items-center">
                <GraduationCap size={20} className="text-gray-400 mr-2" />
                <h4 className="text-lg font-medium">B.S. in Computer Science</h4>
                <p className='text-gray-300 ml-1'>- Nottingham Trent University</p>
              </div>
              <div className="mb-2 text-sm text-gray-400">September 2020 - August 2024</div>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                <li>Achieved Upper Second Class</li>
                <li>Participated in Final Project Showcase with Ai Voice Assistant</li>
                <li>Artificial Intelligence, Web Development, Cloud Computing, Software Engineering</li>
              </ul>
            </div>
          </div>
          
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all text-left">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-6 text-gray-300">
              
              {/* Experience 1 */}
              <div className="relative pl-8 border-l border-gray-700/30 flex flex-col justify-start">
                <div className="absolute left-[-4px] top-0 w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="mb-2 flex items-center">
                  <Briefcase size={20} className="text-gray-400 mr-2" />
                  <h4 className="text-lg font-medium">Software Developer at MswPyStudio</h4>
                </div>
                <div className="mb-2 text-sm text-gray-400">December 2022 - Present</div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Developed and maintained commercial software projects in a studio environment.</li>
                  <li>Built scalable backend solutions using Python, Django, and FastAPI.</li>
                  <li>Worked with SQL databases such as MySQL, MongoDB, and PostgreSQL.</li>
                  <li>Implemented ORM frameworks like Django ORM and SQLAlchemy.</li>
                  <li>Integrated third-party APIs and optimized application performance.</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="relative pl-8 border-l border-gray-700/30 flex flex-col justify-start">
                <div className="absolute left-[-4px] top-0 w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="mb-2 flex items-center">
                  <Briefcase size={20} className="text-gray-400 mr-2" />
                  <h4 className="text-lg font-medium">Developer Internship at Impero Software</h4>
                </div>
                <div className="mb-2 text-sm text-gray-400">June 2022 - December 2022</div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Assisted in building web applications using React, Vue, and Node.js.</li>
                  <li>Gained experience in backend development with C# and ASP.NET.</li>
                  <li>Worked with Microsoft Azure to deploy cloud-based applications.</li>
                  <li>Collaborated with cross-functional teams in an Agile environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      </RevealOnScroll>
    </section>
  );
};
