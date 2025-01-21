import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  tags: string[];
  image_url: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/TeoJiaYiZoe/repos")
      .then((res) => res.json())
      .then((data) => {
        // Manually select which repositories to display
        const selectedRepos = data.filter((repo: Repo) => 
          ["anime-quotes", "spot-checker", "xscape", "notion-widget"].includes(repo.name) 
        ).map((repo: Repo) => {
          // Assign hardcoded tags
          let tags = [];
          switch (repo.name) {
            case "anime-quotes":
              tags = [ "AWS Lambda", "AWS API Gateway", "HTML"];
              break;
            case "spot-checker":
              tags = ["Python", "FastAPI", "ReactJS", "Vite",];
              break;
            case "xscape":
              tags = ["ReactTS", "Vite"];
              break;
              case "notion-widget":
                tags = ["HTML", "JavaScript","CSS"];
                break;
            default:
              tags = ["Web", "Development"];
              break;
          }

          const imageUrl = `/images/${repo.name}-image.jpg`;

          return {
            ...repo,
            tags,
            image_url: imageUrl,
          };
        });

        setRepos(selectedRepos);
      });
  }, []);

  return (
    <section id="projects" className="pt-24">
      <div className="w-full mx-auto py-10 min-h-[0] max-w-6xl">
        <h2 className="text-4xl font-bold text-left text-black mb-6">
          Side Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl bg-white border-2 border-gray-600 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                {/* Project image */}
                <img
                  src={repo.image_url}
                  alt={repo.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                {/* Project title with GitHub icon */}
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl font-semibold text-left  group-hover:text-gray-800 transition-all duration-300">
                    {repo.name}
                  </h3>
                  <div>
                    <FaGithub size={20} />
                  </div>
                </div>
                {/* Project description */}
                <p className="text-gray-800 mt-2 mb-4  transition-all duration-300 text-ellipsis overflow-hidden h-24">
                  {repo.description || "No description available"}
                </p>
                {/* Project tags */}
                <div className="flex flex-wrap gap-2">
                  {repo.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-gray-800  bg-gray-200 py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Overlay effect */}
                <div className="absolute inset-0  from-black opacity-10 group-hover:opacity-5 transition-opacity"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
