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

function P1() {
  return (
    <BackGround>
    <TopHeader> <h2> Project 1 </h2>  </TopHeader>
    <h2> Description:  </h2>
    <h3> Worked on a random number generator, started using the command line, and got familiar using VS code  </h3>

    <ButtonLink href="https://github.com/apiara-tanner/cit281-p1"> Link to GitHub Repo </ButtonLink>

    </BackGround>
  );
}

export default P1;
