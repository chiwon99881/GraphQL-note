import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Notes from '../../Routes/Notes';
import Note from '../../Routes/Note';
import Add from '../../Routes/Add';
import Edit from '../../Routes/Edit';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --greyColor: #A2A19E;
  --blackColor: #373630;
}
body{
  background-color:#F7F5F3;
  @import url('https://fonts.googleapis.com/css?family=Ubuntu');
  font-family: 'Ubuntu', sans-serif;
  color:var(--blackColor);
  padding:50px 100px;
  margin:0;
}
#root{
  max-width:1000px;
  width:100%;
  margin:0 auto;
}
a {
  color:inherit;
  text-decoration:none;
}
div{
  margin:0;
}
input,
textarea{
  appearance:none;
  border:none;
  background-color:transparent;
  resize:none;
  &::placeholder {
      color: #E7E7E6;
  }
  &:focus,
  &:active{
      outline:none;
  }
}
.markdown a{
  text-decoration:underline;
}
button{
  appearance:none;
  width:70px;
  height:60px;
  background-color:transparent;
  font-weight:600;
  font-size:20px;
  cursor:pointer;
  border:2.5px solid var(--blackColor);
  &:focus,
  &:active{
      outline:none
  }
}
`;
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
        <GlobalStyle/>
        <Switch>
          <Route exact={true} path={"/"} component={Notes} />
          <Route  path={"/add"} component={Add} />
          <Route  path={"/note/:id"} component={Note} />
          <Route  path={"/edit/:id"} component={Edit} />
        </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
