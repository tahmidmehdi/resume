function Skills(props) {
  const { skillList } = props;
  const lst = skillList.map(skill => <li>{skill}</li>)
  return (
    <div className="Skills">
      <h2>Skills</h2>
      <ul>
        {lst}
      </ul>
    </div>
  );
}

export default Skills;