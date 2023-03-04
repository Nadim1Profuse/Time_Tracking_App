import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SaveTaskModel from "../Model/SaveTaskModel";

export default function TimerCard(props) {
  const [hh, setHh] = useState(0);
  const [mm, setMm] = useState(0);
  const [ss, setSs] = useState(0);
  const [isBtnDisabled, setBtnDisabled] = useState({
    start: false,
    pause: true,
    save: true,
    reset: true,
  });
  const [saveTaskmodalShow, setSaveTaskModalShow] = useState(false);

  const ssIntervel = useRef(null);

  const startTimer = () => {
    ssIntervel.current = setInterval(() => {
      setSs((prev) => {
        if (prev > 59) {
          setMm((prev) => {
            if (prev > 58) {
              setHh((prev) => prev + 1);
              return 0;
            }
            return (prev % 60) + 1;
          });
        }
        return (prev % 60) + 1;
      });
    }, 1000);

    setBtnDisabled((prev) => {
      return { ...prev, start: true, pause: false, save: false, reset: false };
    });
  };

  const pauseTimer = () => {
    setBtnDisabled((prev) => {
      return { ...prev, pause: true, start: false, reset: false };
    });

    clearInterval(ssIntervel.current);
  };

  const resetTimer = () => {
    setBtnDisabled({
      start: false,
      pause: true,
      save: true,
      reset: true,
    });
    clearInterval(ssIntervel.current);
    setSs(0);
    setMm(0);
    setHh(0);
  };

  const saveTask = () => {
    setSaveTaskModalShow(true);
    console.log("butn status", isBtnDisabled);
    setBtnDisabled({
      start: false,
      pause: true,
      save: true,
      reset: true,
    });
    clearInterval(ssIntervel.current);
  };
  const digitStyle = { fontSize: "6.2em" };
  const digitTextStyle = { fontSize: "1.2em", marginInlineEnd: "2rem" };

  return (
    <>
      <Card
        sx={{
          maxWidth: 550,
          maxHeight: 400,
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: 3,
        }}
      >
        <CardActionArea>
          <CardContent alignItems="center">
            <div
              style={{
                textAlign: "center",
                marginLeft: "2.25rem",
                fontFamily: "Orbitron",
              }}
            >
              <span style={digitStyle}>{hh}</span>
              <span style={digitTextStyle}>h</span>

              <span style={digitStyle}>{mm}</span>
              <span style={digitTextStyle}>m</span>

              <span style={digitStyle}>{ss}</span>
              <span style={digitTextStyle}>s</span>
            </div>

            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              spacing={3}
            >
              <Button
                onClick={startTimer}
                disabled={isBtnDisabled.start}
                variant="outlined"
                color="info"
              >
                Start
              </Button>
              <Button
                onClick={pauseTimer}
                disabled={isBtnDisabled.pause}
                variant="outlined"
                color="warning"
              >
                Pause
              </Button>
              <Button
                disabled={isBtnDisabled.reset}
                onClick={resetTimer}
                variant="outlined"
                color="warning"
              >
                Reset
              </Button>
              <Button
                onClick={saveTask}
                disabled={isBtnDisabled.save}
                variant="outlined"
                color="success"
              >
                save
              </Button>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      {saveTaskmodalShow && (
        <SaveTaskModel
          trackedTime={`0${hh}:${mm}:${ss}`}
          show={saveTaskmodalShow}
          onHide={() => {
            setSaveTaskModalShow(false);
            resetTimer();
          }}
        />
      )}
    </>
  );
}
