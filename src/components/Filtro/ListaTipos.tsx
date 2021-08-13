import { FC } from 'react';
import './ListaTipos.css';

import {
  Checkbox,
  CheckboxGroup,
  ChakraProvider
} from "@chakra-ui/react"

const ListaTipos: FC = () => {
  const tipos: string[] = [
    'Normal',
    'Water',
    'Poison',
    'Psychic',
    'Bug',
    'Dark',
    'Fire',
    'Flying',
    'Electric',
    'Rock',
    'Dragon',
    'Steel',
    'Fighting',
    'Grass',
    'Ground',
    'Ice',
    'Ghost',
    'Fairy'
  ];
  return (
    <div>
      <ChakraProvider>
        {tipos.map((tipo: string) => <Checkbox
          size="md"
          colorScheme="blue"
          defaultIsChecked
        >{tipo}</Checkbox>
        )}
      </ChakraProvider>

    </div>
  );
};

export default ListaTipos;