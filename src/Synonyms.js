export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <ul>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
