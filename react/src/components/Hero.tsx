import { useState } from "react";
import { FaDownload ,FaGithub,FaSearch  } from "react-icons/fa";
function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-6 text-black transition-all duration-300 pt-24"
    >
      <img
        src="zoeteo.png"
        alt="Zoe Teo"
        className="w-48 h-48 rounded-full border-4 border-white mb-4"
      />
      <h1 className="text-4xl md:text-5xl font-bold mt-6">
        Hi, I'm Zoe Teo
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
        Backend Developer | Cloud Enthusiast | Software Architect
      </p>
      <p className="text-lg md:text-xl text-gray-800 mt-6 max-w-6xl mx-auto text-left">
        I’m a backend-focused software developer passionate about building scalable, efficient, and secure applications. With experience in cloud computing, infrastructure automation, and multi-cloud architectures, I specialize in creating robust solutions using technologies like AWS, Azure, and modern backend frameworks. I’m driven by solving complex problems and enhancing systems to make them more efficient, reliable, and adaptable. Explore my portfolio to learn more about my projects and technologies.
      </p>

      {/* Skills and Main Action Section */}
      <div className="mt-10 space-y-10 w-full max-w-4xl mx-auto">
        {/* Skill Button with dropdown */}
        <div className="flex justify-center space-x-6">
          <button
            onClick={toggleDropdown}
            className="flex items-center bg-gray-800 text-white py-3 px-8 rounded-full shadow-xl hover:bg-gray-700 transition duration-300 transform hover:scale-105"
        >
            <FaSearch className="mr-2 text-lg bg-gray-800" /> 
            View Skills
          </button>
          <button>
            <a
              href="https://github.com/TeoJiaYiZoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 text-white py-3 px-8 rounded-full shadow-xl hover:bg-gray-700 transition duration-300 transform hover:scale-105"
            >
            <FaGithub className="mr-2 text-lg bg-gray-800" /> 
              View My GitHub
            </a>
          </button>
          <button>
        <a
            href="Resume_TeoJiaYiZoe.pdf"
            download
            className="flex items-center bg-gray-800 text-white py-3 px-8 rounded-full shadow-xl hover:bg-gray-700 transition duration-300 transform hover:scale-105"
        >
            <FaDownload className="mr-2 text-lg bg-gray-800" /> 
            Download Resume
        </a>
        </button>
        </div>

        {isDropdownOpen && (
          <div className="mt-6 flex justify-center space-x-6">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 ">
              <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://img.icons8.com/material-rounded/240/FFFFFF/amazon-web-services.png"
                  alt="AWS"
                  className="w-12 h-12 mb-4 bg-gray-800"
                />
                <span className="text-sm text-white shadow-md bg-gray-800">AWS</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://img.icons8.com/ios-filled/250/FFFFFF/azure-api-manager.png"
                  alt="Azure"
                  className="w-12 h-12 mb-4 bg-gray-800"
                />
                <span className="text-sm text-white shadow-md bg-gray-800">Azure</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://img.icons8.com/ios-glyphs/240/FFFFFF/python.png"
                  alt="Python"
                  className="w-12 h-12 mb-4 bg-gray-800"
                />
                <span className="text-sm text-white bg-gray-800">Python</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://img.icons8.com/ios-filled/250/FFFFFF/terraform.png"
                  alt="Terraform"
                  className="w-12 h-12 mb-4 bg-gray-800"
                />
                <span className="text-sm text-white bg-gray-800">Terraform</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://img.icons8.com/ios-filled/250/FFFFFF/docker.png"
                  alt="Docker"
                  className="w-12 h-12 mb-4 bg-gray-800"
                />
                <span className="text-sm text-white bg-gray-800">Docker</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://img.icons8.com/ios-filled/250/FFFFFF/mysql-logo.png"
                  alt="MySQL"
                  className="w-12 h-12 mb-4 bg-gray-800"
                />
                <span className="text-sm text-white bg-gray-800">MySQL</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://img.icons8.com/ios-filled/250/FFFFFF/postgreesql.png"
                  alt="Postgres"
                  className="w-12 h-12 mb-4 bg-gray-800"
                />
                <span className="text-sm text-white bg-gray-800">Postgres</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://img.icons8.com/external-sbts2018-solid-sbts2018/117/FFFFFF/external-01-elasticsearch-elastic-search-sbts2018-solid-sbts2018.png"
                  alt="ElasticSearch"
                  className="w-12 h-12 mb-4 bg-gray-800"
                />
                <span className="text-sm text-white bg-gray-800">ElasticSearch</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://img.icons8.com/ios-glyphs/240/FFFFFF/react.png"
                  alt="React"
                  className="w-12 h-12 mb-4 bg-gray-800"
                />
                <span className="text-sm text-white bg-gray-800">React</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src="https://img.icons8.com/material/240/FFFFFF/tailwind_css.png"
                  alt="Tailwind"
                  className="w-12 h-12 mb-4 bg-gray-800"
                />
                <span className="text-sm text-white bg-gray-800">Tailwind</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
