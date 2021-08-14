import { useState } from 'react';
import './ListaTipos.css';

import {
  Checkbox,
  CheckboxGroup,
  ChakraProvider
} from "@chakra-ui/react"

const ListaTipos = () => {
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

  const [tiposSelecionados, setTiposSelecionados] = useState({
    'Normal': true,
    'Water': true,
    'Poison': true,
    'Psychic': true,
    'Bug': true,
    'Dark': true,
    'Fire': true,
    'Flying': true,
    'Electric': true,
    'Rock': true,
    'Dragon': true,
    'Steel': true,
    'Fighting': true,
    'Grass': true,
    'Ground': true,
    'Ice': true,
    'Ghost': true,
    'Fairy': true
  }
  );
  var listaAtualizada = {
    'Normal': true,
    'Water': true,
    'Poison': true,
    'Psychic': true,
    'Bug': true,
    'Dark': true,
    'Fire': true,
    'Flying': true,
    'Electric': true,
    'Rock': true,
    'Dragon': true,
    'Steel': true,
    'Fighting': true,
    'Grass': true,
    'Ground': true,
    'Ice': true,
    'Ghost': true,
    'Fairy': true
  }
  const [isSelected, setIsSelected] = useState(true);
  return {
    tiposSelecionados,
    renderListaTipos: (

      <div>
        <ChakraProvider>
          <CheckboxGroup>
            {tipos.map((tipo: string) => <Checkbox
              size="md"
              colorScheme="blue"
              defaultIsChecked
              name={tipo}
              isChecked={isSelected}
            //onChange={ }
            >{tipo}</Checkbox>
            )}
          </CheckboxGroup>
        </ChakraProvider>

      </div >)
  };
};

export default ListaTipos;