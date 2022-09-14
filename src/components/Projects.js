import ProjectEntry from "./ProjectEntry";

function Projects() {
    var projects = [
        {title: "First Project", description: "Here's a little about my first project. It took a lot of time and a lot of hard work, but it turned out great. I used machine learning, artificial intelligence, blockchain, and some other buzzwords", url: "https://hack.rice.edu/"},
        {title: "Second Project", description: "This project is way better than the last one. A lot of skills were learned, like React and JavaScript!", url: "https://hack.rice.edu/"},
        {title: "Another Project", description: "Pretty cool project. Worked on it for a bit then gave up because I got bored. Still learned a lot though!", url: "https://hack.rice.edu/"},
        {title: "Final Project", description: "Best project out there. Solves all my problems because it is my portfolio website, and this will get me a high paying internship", url: "https://hack.rice.edu/"},
    ];

    var projectComponents = [];
    projects.forEach(project => {
        projectComponents.push(<ProjectEntry title={project.title} description={project.description} url={project.url} />);
    })

    return (
        <div className="section" id="projects">
            <h3 className="sectionName">Projects</h3>
            <div className="sectionContent">
                {projectComponents}
            </div>
        </div>
    );
}
  
  export default Projects;
  