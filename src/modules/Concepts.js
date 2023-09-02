import Concept from "./Concept";

function Concepts(props) {
  return (
    <ul id="concepts">
        <Concept content = {props.contents[0]}/>
        <Concept content = {props.contents[1]}/>
        <Concept content = {props.contents[2]}/>
    </ul>
  );
}

export default Concepts;
