import { FC, useState } from 'react';
import './FiltroCP.css';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value: any) {
  return `${value}°C`;
}





const FiltroCP: FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div>
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <div className={classes.root}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
    </div>
  );
};

export default FiltroCP;