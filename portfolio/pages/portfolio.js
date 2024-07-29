import Navbar from '../components/navbar'
import Card from '../components/card'

import styles from '../styles/Portfolio.module.css'

const projects = [
    {
        id: 1,
        projectName: 'Weather Forecast',
        hyperlink: 'https://sinkyli.github.io/weatherforecast/',
        projectDescription: 'A look at the 5-day forecast utilizing OpenWeather API'
    },
    {
        id: 2,
        projectName: 'Notepad',
        hyperlink: 'https://notepadapp123.herokuapp.com/',
        projectDescription: 'A simple text editor'
    },
    {
        id: 3,
        projectName: 'Project 3',
        hyperlink: 'https://notepadapp123.herokuapp.com/',
        projectDescription: 'Insert project description here'
    },
    {
        id: 4,
        projectName: 'Project 4',
        hyperlink: 'https://notepadapp123.herokuapp.com/',
        projectDescription: 'Insert project description here'
    },

   
]

export default function Portfolio(){
  return (       
      <div>
          <div className={styles.portfolio}>
              <h1 className="text-2xl font-bold">Projects</h1>
          </div>
          <div className="container mx-auto flex flex-wrap">
              {projects.map(project => (
                  <div key={project.id} className={styles.application}>
                      <Card 
                          projectName={project.projectName}
                          hyperlink={project.hyperlink}
                          projectDescription={project.projectDescription}
                      />
                  </div>
              ))}
          </div>
      </div>    
  )
}