import './Publication.css';

function Publication(props) {
  return (
    <article className="Publication">
      <a href={props.link} className="bold">{props.title}</a>
      <p>{props.authors}</p>
      <p className="italic">{props.journal} {props.volume} {props.issue && `(${props.issue})`} {props.pages && `, Pages ${props.pages}`} {props.date && `, ${props.date}`}</p>
    </article>
  );
}

export default Publication;