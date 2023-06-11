import './App.css';
import {BackGround, TopHeader, MainP, MainGrid, LilGrid,ButtonLink} from './style.js'
import {Grommet, Button} from 'grommet';
import { Sans, StrikeThrough } from 'grommet-icons';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import P1 from './p1.js';
import P2 from './p2.js';
import P3 from './p3.js';



function Main() {
  return (
    <BackGround>
    <TopHeader> <h2> Hello, Welcome to my Portfolio </h2>  </TopHeader>
      <MainGrid>
      <MainP>
      <Link to="/P1">

        <LilGrid>
        <Sans size='large' color= 'pink' />
        <h2>Project 1 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P2">
        <LilGrid>
        <StrikeThrough size='large' color= 'pink' />
        <h2>Project 2 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P3">
        <LilGrid>
        <Sans size='large' color= 'pink' />
        <h2>Project 3 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P1">

        <LilGrid>
        <Sans size='large' color= 'pink' />
        <h2>Project 1 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P1">

        <LilGrid>
        <Sans size='large' color= 'pink' />
        <h2>Project 1 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P1">

        <LilGrid>
        <Sans size='large' color= 'pink' />
        <h2>Project 1 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P1">

        <LilGrid>
        <Sans size='large' color= 'pink' />
        <h2>Project 1 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P1">

        <LilGrid>
        <Sans size='large' color= 'pink' />
        <h2>Project 1 </h2>
        </LilGrid>
        </Link>
      </MainP>


    </MainGrid>


    </BackGround>
  );
}

export default Main;
