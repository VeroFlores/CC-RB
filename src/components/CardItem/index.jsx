/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import DatePickers from '../DateTimePicker/index';

const useStyles = makeStyles((theme) => ({
  box: {
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  align: {
    display: 'flex',
    flexDirection: 'row',
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 500,
    margin: '5px auto',
  },
  isSelected: {
    border: 'solid #1976d2 ',
    padding: theme.spacing(2),
    maxWidth: 500,
  },
  image: {
    width: 100,
    height: 100,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  isActiveDate: {
    visibility: 'hidden',
  },
}));
const CardItem = (props) => {
  const classes = useStyles();
  const { infoItem, isActive } = props;
  return (
    <div>
      <Paper className={isActive ? classes.isSelected : classes.paper}>
        <Grid className={classes.box} container spacing={2}>
          <Grid item className={classes.align}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {infoItem.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    ViewBuilder
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://www.pngrepo.com/png/293682/180/triangles-shapes-and-symbols.png" />
              </ButtonBase>
            </Grid>
          </Grid>
          <Grid item className={!isActive ? classes.isActiveDate : ''}>
            <DatePickers isActive={isActive} />
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
};
CardItem.propTypes = {
  infoItem: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
};
export default CardItem;
