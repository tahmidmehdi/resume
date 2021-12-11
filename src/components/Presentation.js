import './Presentation.css';

function Presentation(props) {
  return (
    <article className="Presentation">
      <a href={props.link} className="bold">{props.title}</a>
      <p>{props.conference}</p>
      <p>{props.location}</p>
    </article>
  );
}

export default Presentation;