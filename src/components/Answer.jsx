import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderColor: '#FFB549',
      color: '#696969',
      fontWeight: 800,
      marginBottom: '8px',
      "&:hover": {
        backgroundColor: '#FFB549',
        color: '#fff'
      }
    }
  })
));
 
const Answer = (props) => {
  const classes = useStyles();
  return(
    <Button 
      className={classes.button}
      variant="outlined"  onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
  )
}
export default Answer　