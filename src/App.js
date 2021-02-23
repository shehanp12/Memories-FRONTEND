import React from 'react';
import {Container,AppBar,Typography,Grow,Grid} from "material-ui";

const App = () => {

  return(
     <Container maxidth="lg">
         <AppBar position="static" color="inherit">
             <Typography variant="h2" aligin="center">Memories</Typography>
             <img src={memories} alt="memories" height="60"/>
         </AppBar>
     </Container>
  );

}

export default App;
