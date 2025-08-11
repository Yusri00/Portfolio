import htmlIcon from '../assets/images/html.png';
import cssIcon from '../assets/images/css.png';
import reactIcon from '../assets/images/react.png';
import jsIcon from '../assets/images/js.png';
import quizImg from '../assets/images/quiz.png';
import weatherImg from '../assets/images/väder.png';
import recipeImg from '../assets/images/recept.png';
import animalImg from '../assets/images/djur.png';
import individualIcon from '../assets/images/user.png';
import groupIcon from '../assets/images/group.png';
import teamImg from '../assets/images/teamwork.png';

const Projects = () => {
  const projectArr = [
    {
      title: 'Lilla Djurvärlden',
      description: 'En app för barn mellan 3-5 år där de får matcha rätt djurnamn med rätt djur',
      tech: [
          {name: 'HTML', icon: htmlIcon},
          {name: 'CSS', icon: cssIcon },
          {name: 'React', icon: reactIcon }
        ],
      link: 'https://lilla-djurvarlden.netlify.app',
      image: animalImg,
      teamIcon: groupIcon,
      teamTitle: 'Teamwork'
    },

    {
      title: 'Matrecept app',
      description: 'App för matrecept som hämtar data genom Rest-API från mealDB',
      tech: [
          {name: 'HTML', icon: htmlIcon},
          {name: 'CSS', icon: cssIcon },
          {name: 'React', icon: reactIcon }
        ],
      link: 'https://food-recipes-live.netlify.app/',
      image: recipeImg,
      teamIcon: individualIcon,
      teamTitle: 'Individual task'
    },

    {
      title: 'Quiz app',
      description: 'Quiz app med några frågor',
      tech: [
        { name:'HTML', icon: htmlIcon }, 
        { name: 'CSS', icon: cssIcon },
        { name:'JavaScript', icon: jsIcon }
        ],
      link: 'https://quiz-game-live.netlify.app',
      image: quizImg,
      teamIcon: individualIcon,
      teamTitle: 'Individual task'
    }, 

    {
      title: 'Väder app',
      description: 'Hämtar väder med API från openMeteo',
      tech: [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'React', icon: reactIcon }
      ],
      link: 'https://weather-broadcasting.netlify.app',
      image: weatherImg,
      teamIcon: individualIcon,
      teamTitle: 'Individual task'
    }
  ]

  const allProjects = projectArr.map((projects) => projects)
  console.log(allProjects);
  
  return (
    <>
    <h1 className="projects-title">Projects</h1>
    <div className="project-container">
      <section id="project-cards">
        {projectArr.map((projects, index) =>(
          <div key={index} className="project-box"  onClick={() => window.open(projects.link, '_blank')}>
            <h3>{projects.title}</h3>
            <img
              src={projects.image}
              alt={projects.title}
              className='project-img'
            />
            <p>{projects.description}</p>
        
        <div className='project-icons-container'>
            <div className='tech-icons'>
            {projects.tech.map((t, i) =>(
            <img
              key={i}
              src={t.icon}
              alt={t.name}
              title={t.name}
              className='tech-icon'
              />
            ))}
        </div>

            <img
              src={projects.teamIcon}
              alt={projects.teamTitle}
              title={projects.teamTitle}
              className='team-icon'
              />
            </div>
          </div>
      ))}
      </section>
    </div>
  </>
  );
}

export default Projects;