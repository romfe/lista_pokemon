import { useState } from 'react';
import {MainCard} from './styles';

//importando bibliotecas importantes para as checkboxes
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
    'Fairy',
  ];
  const [tiposSelecionados, setTiposSelecionados] = useState(tipos);

  type evento = {
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  }

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (tiposSelecionados.includes(e.currentTarget.name)) {
      setTiposSelecionados(tiposSelecionados.filter(valor => valor !== e.currentTarget.name));
    } else {
      setTiposSelecionados([...tiposSelecionados, e.currentTarget.name]);
    }
  }

  return {
    tiposSelecionados,
    renderListaTipos: (
      <MainCard>
        <ChakraProvider>
          <CheckboxGroup>
            <div className="grupo-tipos">

              {tipos.map((tipo: string) => //uma checkbox para cada tipo de Pokémon
                <Checkbox
                  size="md"
                  colorScheme="blue"
                  defaultIsChecked
                  name={tipo}
                  onChange={changeHandler} //evento que controla quais checkboxes estão selecionadas
                  className="checkbox-tipo"
                >{tipo}</Checkbox>
              )}

            </div>
          </CheckboxGroup>
        </ChakraProvider>
        </MainCard>)
  };
};

export default ListaTipos;