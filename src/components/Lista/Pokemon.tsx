import { FC } from 'react';

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
    <div>
      <p>{props.name}</p>
      <p>{props.types}</p>
    </div>
  );
}

export default Pokemon;