import './Job.css';

function Job(props) {
  const duties = props.description
  const dutyList = duties.map(duty => <li>{duty}</li>)
  return (
    <article className="Job">
      <img src={props.image_path} alt="logo" className="logo" />
      <div className="job-info">
        <h4>{props.title}</h4>
        <div className="org-dates">
            <p className="org">{props.company}, {props.location}</p>
            <p>{props.dates}</p>
        </div>
        <ul className="tasks">
            {dutyList}
        </ul>
      </div>
    </article>
  );
}

export default Job;
