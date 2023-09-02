function Concept(props) {
  return (
    <li className="concept">
      <img src={props.content.image} alt={props.content.title} />
      <h2>{props.content.title}</h2>
      <p>{props.content.description}</p>
    </li>
  );
}

export default Concept;
