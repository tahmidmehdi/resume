import presentations from '../data/presentations';
import Presentation from './Presentation';

function PresentationList() {
  const parsedPres = presentations.map(pres => <Presentation key={pres.id} title={pres.title} conference={pres.conference} location={pres.location} link={pres.link} date={pres.date} />);
  return (
    <div className="PresentationList">
      <h2>Presentations</h2>
      {parsedPres}
    </div>
  );
}

export default PresentationList;