import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        
        <div className="projects-container">
          <a className="project-box parkx" href="https://github.com/niyatimadaan/ParkX">
            <h3>ParkX</h3>
            <p>
              ParkX is a smart parking cloud-based system software. Inputs from
              IR and piezoelectric sensors get processed in the Raspberry PI and
              sent to the cloud. The parking availability data is displayed in
              an interactive frontend where users can book spaces. Creating a
              user interactive frontend using ReactJS and backend using NodeJS.
            </p>
          </a>
          <a className="project-box connecting" href="https://github.com/niyatimadaan/Connecting">
            <h3>Connecting</h3>
            <p>
              Connecting is an flutter mobile application built for Teachers to
              keep track of the Students, give Assignments, and maintain their
              own schedule. Used Firestore as a database.
            </p>
          </a>
          <a className="project-box webc" href="https://github.com/niyatimadaan/webcrawler/tree/master">
            <h3>Web Crawler</h3>
            <p>
              Built a menu driven web scraper using python. Parsing out the html
              code using BeautifulSoup. Finding the directories, links and
              social media accounts. Using selenium to take screenshots of the
              website.
            </p>
          </a>
          <a className="project-box sppm" href="https://github.com/niyatimadaan/shortest_path_prediction_from_image">
            <h3>Shortest Path Prediction Model </h3>
            <p>
              Computer Vision project predicting shortest path given between two
              points in an image. Roads are detected from the image shot from a
              drone above the ground using OpenCV. Shortest path is calculated
              using Djikstra’s algorithm. Tech Stack used: Python, Numpy,
              matplotlib, OpenCV.
            </p>
          </a>
        </div>
      </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Projects
