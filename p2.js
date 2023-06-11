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

function P2() {
  return (
    <BackGround>
    <TopHeader> <h2> Project 2 </h2>  </TopHeader>
    <h2> Description:  </h2>
    <h3> Randomly generated strings and worked with Git ignore!  </h3>

    <ButtonLink href="https://github.com/apiara-tanner/cit281-p2/"> Link to GitHub Repo </ButtonLink>

    </BackGround>
  );
}

export default P2;
