import "./App.css";
import Container from "@material-ui/core/Container";
import AlarmIcon from "@material-ui/icons/Alarm";
import Timer from "./components/Timer";
import { useState } from "react";
import BtnStart from "./components/BtnStart";

function App() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [status, setStatus] = useState(0);
  const [interval, toggleInterval] = useState();
  const [desc, setDesc] = useState("");

  let updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const increment = (X) => {
    if (X === "h" && time.h < 59)
      setTime({ h: time.h + 1, m: time.m, s: time.s });
    else if (X === "m" && time.m < 59)
      setTime({ m: time.m + 1, h: time.h, s: time.s });
    else if (X === "s" && time.s < 59)
      setTime({ s: time.s + 1, h: time.h, m: time.m });
  };

  const decrement = (X) => {
    if (X === "h" && time.h > 0)
      setTime({ h: time.h - 1, m: time.m, s: time.s });
    else if (X === "m" && time.m > 0)
      setTime({ m: time.m - 1, h: time.h, s: time.s });
    else if (X === "s" && time.s > 0)
      setTime({ s: time.s - 1, h: time.h, m: time.m });
  };

  const countDown = () => {
    updatedS--;

    if (updatedS === -1) {
      updatedM--;
      updatedS = 59;
    }
    if (updatedM === -1) {
      updatedH--;
      updatedM = 59;
    }
    if (updatedH < 0) finish();
    else setTime({ h: updatedH, m: updatedM, s: updatedS });
  };

  const start = () => {
    setDesc("Time Remaining");
    countDown();
    setStatus(1);
    toggleInterval(setInterval(countDown, 1000));
  };

  const pause = () => {
    clearInterval(interval);
    setStatus(2);
  };

  const reset = () => {
    setDesc("");
    document.body.style = "background-color: cyan";
    setStatus(0);
    clearInterval(interval);
    setTime({ h: 0, m: 0, s: 0 });
  };

  const finish = () => {
    setDesc("BOOOMMMM!!!!");
    document.body.style = "background-color: rgb(0, 255, 0);";
    setStatus(3);
    clearInterval(interval);
  };

  return (
    <Container maxWidth="sm" align="center">
      <div>
        <h3>
          <AlarmIcon /> SIMPLE COUNTDOWN <AlarmIcon />
        </h3>
      </div>
      <h4>{desc}</h4>
      <Timer time={time} increment={increment} decrement={decrement} />
      <BtnStart status={status} start={start} pause={pause} reset={reset} />
    </Container>
  );
}

export default App;
