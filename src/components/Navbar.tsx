function Navbar() {
    return (
      <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
        <nav className="flex text-black justify-between items-center mx-auto px-6">
          <ul className="flex space-x-6 ml-auto ">
            <li><a href="#hero" className="hover:text-gray-400 transition-colors duration-300">Home</a></li>
            <li><a href="#experience" className="hover:text-gray-400 transition-colors duration-300">Experience</a></li>
            <li><a href="#projects" className="hover:text-gray-400 transition-colors duration-300">Projects</a></li>
            <li><a href="mailto:zoeteojiayi@gmail.com" className="hover:text-gray-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Navbar;
  