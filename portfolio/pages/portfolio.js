import Navbar from '../components/navbar'
import Card from '../components/card'

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

   
]

export default function Portfolio(){
  return (       
      <div>
          <div className="flex justify-center my-8">
              <h1 className="text-2xl font-bold">Projects</h1>
          </div>
          <div className="container mx-auto flex flex-wrap justify-center">
              {projects.map(project => (
                  <div key={project.id} className="flex-auto basis-1/2 p-4">
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