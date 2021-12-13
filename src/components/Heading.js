import { imageBaseUrl } from '../settings';
import Education from './Education';
import './Heading.css';
import Links from './Links';
import PresentationList from './PresentationList';
import Skills from './Skills';

function Heading(props) {
  const avatar = imageBaseUrl + '/11092120.jpg';
  const skillList = [
    'Python', 
    'Javascript',
    'SQL',
    'R',
    'Bash',
    'tensorflow', 
    'numpy', 
    'scipy',
    'pandas', 
    'Azure', 
    'AWS',
    'IBM Cloud', 
    'PostgreSQL',
    'APIs', 
    'Git',
    'CI/CD',
    'Docker',
  ]
  return (
    <div className="Heading">
      <img className="round" src={avatar} alt="profile pic" />
      <h1>Tahmid Mehdi</h1>
      <h2>{props.title}</h2>
      <Links />
      <p>I’m a full-stack machine learning developer who can engineer data, develop AI models and deploy them to production on cloud infrastructures. I have 5 years of experience with end-to-end data science projects and have delivered APIs to serve customers with machine learning solutions with a focus on MLOps.</p>
      <Skills skillList={skillList} />
      <Education />
      <PresentationList />
    </div>
  );
}

export default Heading;