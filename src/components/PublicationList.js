import pubs from '../data/publications';
import Publication from './Publication';

function PublicationList() {
  const parsedPubs = pubs.map(pub => <Publication key={pub.id} title={pub.title} authors={pub.authors} journal={pub.journal} volume={pub.volume} date={pub.date} issue={pub.issue} pages={pub.pages} link={pub.link} />);
  return (
    <div className="PublicationList">
      <h2>Publications</h2>
      {parsedPubs}
    </div>
  );
}

export default PublicationList;