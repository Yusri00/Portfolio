
const Projects = () => {
  const projectArr = [
    {
      title: 'Quiz app',
      description: 'Quiz app med några frågor',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://quiz-game-live.netlify.app'
    }, 

    {
      title: 'Väder app',
      description: 'Hämtar väder med API från openMeteo',
      tech: ['React', 'CSS'],
      link: 'https://weather-broadcasting.netlify.app'
    },

    {
      title: 'Matrecept app',
      description: 'App för matrecept som hämtar data genom Rest-API från mealDB',
      tech: ['React', 'CSS'],
      link: 'https://food-recipes-live.netlify.app/'
    },

    {
      title: 'Lilla Djurvärlden',
      description: 'En app för barn mellan 3-5 år där de får matcha rätt djurnamn med rätt djur',
      tech: ['React', 'CSS'],
      link: 'https://lilla-djurvarlden.netlify.app'
    }
  ]

  const allProjects = projectArr.map((projects) => projects)
  console.log(allProjects);
  
  return (
    <div className="project-container">
      <section id="project-cards">
        {projectArr.map((projects, index) =>(
          <div key={index} className="project-box">
            {projects.title}
          </div>
        ))}
      </section>

    </div>
  )
}

export default Projects