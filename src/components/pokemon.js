import './Pokemon.css';

function Pokemon(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <img className='photo' alt={`${props.name}`} src={props.image} />
    </>
  )
}

export default Pokemon;
