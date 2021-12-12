import './App.css';
import Experience from './components/Experience';
import Heading from './components/Heading';
import PublicationList from './components/PublicationList';

function App() {
  const title = 'Senior Machine Learning Researcher/ Developer at Giatec';
  return (
    <div className="App">
      <Heading title={title} />
      <div className="Content">
        <Experience />
        <PublicationList />
      </div>
    </div>
  );
}

export default App;
