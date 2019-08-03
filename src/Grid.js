import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    'padding-top': '20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
    return (
    <div>
      {props.tweets.map((tweet,index) => (
        <div className={classes.root} key={tweet + index}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <div style={{display:'flex',alignItems:'center'}}>
              <Avatar alt="Remy Sharp" src={tweet.profile_image_url} className={classes.bigAvatar} /><span style={{'paddingRight': '12px'}}></span>
               <p>{tweet.text}</p>
               </div>
              </Paper>
            </Grid>
          </Grid>
         </div>
    ))}
    </div>
  )
}
