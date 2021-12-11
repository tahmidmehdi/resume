import './School.css';

function School(props) {
  return (
    <article className="School">
      <img src={props.image_path} alt="logo" className="logo" />
      <div className="school-info">
        <p className="bold">{props.degree} in {props.major}</p>
        <p>{props.name}, {props.location}</p>
        <p>{props.dates}</p>
      </div>
    </article>
  );
}

export default School;