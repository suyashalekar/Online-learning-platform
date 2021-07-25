import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import banner from '../assets/banner2/29493.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '130px',
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function SimpleGrow() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
          <Paper elevation={4} className={classes.paper}>
            <div className="container-fluid">
              <img src={banner} className="img-fluid" style={{ width: '100%', objectFit: 'cover' }} alt="grow" />
            </div>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}
//<a href='https://www.freepik.com/vectors/sale'>Sale vector created by macrovector - www.freepik.com</a>
