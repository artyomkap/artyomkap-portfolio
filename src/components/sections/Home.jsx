import { RevealOnScroll}  from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-10 bg-gradient-to-r from-blue-500 to-purple-600 
                      bg-clip-text text-transparent animate-gradient">
          Hello, my name is Artem Kapustin
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">I'm a passionate full-stack developer dedicated to crafting efficient and user-friendly solutions.
        My goal is to grow into a successful Senior Developer while delivering high-performance applications and exceptional user experiences.</p>
        <div className="flex justify-center space-x-4">
          {/* First button with animated background and hover opacity effect */}
          <a href="#projects" className="text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            animate-button-gradient hover:opacity-80 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
            View Projects
          </a>

          {/* Second button with animated border, font color, and hover opacity effect */}
          <a href="#contact" className="py-3 px-6 rounded font-medium transition-all duration-200 
            animate-border-gradient hover:opacity-80 hover:-translate-y-0.5">
            Contact Me
          </a>
        </div>


      </div>
      </RevealOnScroll>
    </section>
  );
};
