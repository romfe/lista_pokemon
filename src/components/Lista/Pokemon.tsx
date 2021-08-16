import './Pokemon.css';
//import {useState} from 'react';
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
  let classe: string;
  if (props.maxCP <= 500) {
    classe = "maxcp vermelho";
  } else if (props.maxCP > 500 && props.maxCP <= 1000) {
    classe = "maxcp roxo";
  } else if (props.maxCP > 1000 && props.maxCP <= 1500) {
    classe = "maxcp amarelo";
  } else {
    classe = "maxcp azul";
  }

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
      <div className={classe}>
        <p className="maxcp-text">{props.maxCP}</p>
      </div>
    </div>
  );
}

export default Pokemon;