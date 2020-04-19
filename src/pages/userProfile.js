import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css'
import Link from 'react-router-dom/Link'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    backgroundColor: "rgba(255,255,216,1)",
    margin: "15px auto 15px auto"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Userprofile(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.user["התאגדות"]}
        </Typography>
        <Typography variant="h3" component="h2">
          {props.user["שם פרטי"]+" "+props.user["שם משפחה"]}
        </Typography>
        <Typography variant="h6" component="h1">
          {props.user.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" component={Link} to={`/userquery/${props.user.id}`}> מידע נוסף </Button>
      </CardActions>
    </Card>
    
  );
}
