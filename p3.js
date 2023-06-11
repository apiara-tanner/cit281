import './App.css';
import {BackGround, TopHeader, MainP, MainGrid, LilGrid,ButtonLink} from './style.js'
import {Grommet, Button} from 'grommet';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function P3() {
  return (
    <BackGround>
    <TopHeader> <h2> Project 3 </h2>  </TopHeader>
    <h2> Description:  </h2>
    <h3> Gain experience with Node.js as well as code modules. Also heavily used array methods.  </h3>

    <ButtonLink href="https://github.com/apiara-tanner/cit281-p3/"> Link to GitHub Repo </ButtonLink>

    </BackGround>
  );
}

export default P3;
