import FiltroCP from './FiltroCP';
import ListaTipos from './ListaTipos';
import './Filtro.css';

const Filtro = () => {
  const { value, renderSlider } = FiltroCP();
  const { tiposSelecionados, renderListaTipos } = ListaTipos();
  return {
    value, tiposSelecionados, renderFiltro: (
      <div className="card-filtro">
        <h1 className="titulo-filtro">Filtro</h1>
        {renderSlider}
        {value[0]}
        {renderListaTipos}
      </div>
    )
  };
};

export default Filtro;