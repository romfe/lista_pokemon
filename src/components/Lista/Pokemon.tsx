import './Pokemon.css';

interface Props {
  __typename: string,
  id: string,
  image: string,
  maxCP: number,
  name: string,
  number: string,
  types: string[],
};


const Pokemon = (props: Props) => {
  return (
    <div className="pokemon">
      <div>
        <img src={props.image} alt={props.name} className="imagem-pokemon" />
      </div>
      <div className="nome-pokemon">
        {props.name}
      </div>
      <div className="numero-pokemon">
        {props.number}
      </div>
      <div className="tipos-pokemon">
        {props.types}
      </div>
      <div className="maxcp-pokemon">
        <p className="maxcp-text">{props.maxCP}</p>
      </div>
    </div>
  );
}

export default Pokemon;