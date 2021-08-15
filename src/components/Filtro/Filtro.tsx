import FiltroCP from './FiltroCP';
import ListaTipos from './ListaTipos';
import './Filtro.css';

const Filtro = () => {
  const { value, renderSlider } = FiltroCP();
  const { tiposSelecionados, renderListaTipos } = ListaTipos();
  return {
    value, tiposSelecionados, renderFiltro: (
      <div>
        {renderSlider}
        {value[0]}
        {renderListaTipos}
      </div>
    )
  };
};

export default Filtro;