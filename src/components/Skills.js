import './Skills.css';

function Skills(props) {
  const { skillList } = props;
  const lst = skillList.map(skill => <span>{skill}</span>)
  return (
    <div className="Skills">
      <h2>Skills</h2>
      <div className="Skills-list">
        {lst}
      </div>
    </div>
  );
}

export default Skills;
