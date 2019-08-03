import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from './Grid';
import Pusher from 'pusher-js';

class App extends React.Component {

  constructor(props){
      super(props);

      this.state = {
        tweets: []
      };

  }


 componentDidMount() {
  
    const pusher = new Pusher('88af10c09a441540e3c4', {
      cluster: 'ap1',
      encrypted: true,
    });

    //subscribe channel for listening
    const channel = pusher.subscribe('twitterStream');

    channel.bind('tweet', data => {
      console.log(data);
      this.setState({ tweets: [...this.state.tweets, data]});
    });

  }

  render(){
    return(
    <div>
      <AppBar position="static" color="default">
        <Toolbar  style={{margin:'auto'}}>
          <Typography variant="h6" color="inherit" align="center">
            Star Wars Tweet Real Time
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
      <Grid tweets={this.state.tweets}/>
      </Container>
    </div>
    )
  }
}

export default App;