import logo from "./logo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import AlarmIcon from "@material-ui/icons/Alarm";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [time, setTime] = useState({ h: 3, m: 0, s: 0 });

  const increment = () => {
    this.time.setState({ h: this.time.h + 1 });
  };

  return (
    <Container maxWidth="sm" align="center">
      <div>
        <h3>
          {" "}
          <AlarmIcon />
          SIMPLE COUNTDOWN <AlarmIcon />
        </h3>
      </div>
      <Timer time={time} increment={increment} />
      <button onClick={increment}>asd</button>
    </Container>
  );
}

export default App;
