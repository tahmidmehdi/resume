import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Heading from './components/Heading';

function App() {
  const title = 'Senior Machine Learning Researcher/ Developer at Giatec';
  return (
    <div className="App">
      <Heading title={title} />
      <div className="Content">
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default App;
