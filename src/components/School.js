import './School.css';

function School(props) {
  const coursesTAed = props.coursesTaught;
  const coursesList = coursesTAed.map(course => <li>{course}</li>);
  return (
    <article className="School">
      <img src={props.image_path} alt="logo" className="logo" />
      <div className="school-info">
        <h3>{props.degree} in {props.major}</h3>
        <p>{props.name}, {props.location}</p>
        <p>{props.dates}</p>
        <h4>Teaching Assistant for Courses:</h4>
        <ul>
          {coursesList}
        </ul>
      </div>
    </article>
  );
}

export default School;