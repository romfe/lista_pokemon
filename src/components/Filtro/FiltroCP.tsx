import { useState } from 'react';
import './FiltroCP.css';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});


const FiltroCP = () => {
  const classes = useStyles();
  const [value, setValue] = useState([50, 3905]);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return {
    value,
    renderSlider: (
      <div>
        <Typography id="range-slider" gutterBottom>
          <p className="maxCP-label">maxCP</p>
        </Typography>
        <div className={classes.root}>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
            max={4000}
            className="slider"
          />
        </div>
      </div>
    )
  };
};

export default FiltroCP;