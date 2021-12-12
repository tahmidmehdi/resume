import schools from '../data/schools';
import School from './School';

function Education() {
  const parsedSchools = schools.map(school => <School key={school.id} name={school.name} degree={school.degree} location={school.location} major={school.major} dates={school.dates} coursesTaught={school.coursesTaught} image_path={school.image_path} />);
  return (
    <div className="Education">
      <h2>Education</h2>
      {parsedSchools}
    </div>
  );
}

export default Education;