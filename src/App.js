import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import GameResult from "./components/GameResult";
import Layout from "./components/Layout";
import Play from "./components/Play";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <Layout playerScore={playerScore}>
      <Switch>
        <Route path="/" exact>
          <Play onChoose={setMyChoice} />
        </Route>
        <Route path="/game">
          <GameResult myChoice={myChoice} setPlayerScore={setPlayerScore} />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
