import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center py-6 text-base">
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/TeoJiaYiZoe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-2xl transition-colors duration-300">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/teo-jia-yi-zoe/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-2xl transition-colors duration-300">
          <FaLinkedin />
        </a>
        <a href="mailto:zoeteojiayi@gmail.com" className="hover:text-blue-400 text-2xl transition-colors duration-300">
          <FaEnvelope />
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-400">© 2025 Zoe Teo</p>
    </footer>
  );
}

export default Footer;
