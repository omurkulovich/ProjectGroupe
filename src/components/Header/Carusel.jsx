import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Мужские Кроссовки Nike Air Max 270",
    imgPath:
      "https://i.pinimg.com/originals/b1/10/e8/b110e8db1626dc959e3d6e787d8ae525.jpg",
    id: 1,
  },
  {
    label: "Мужские Кроссовки Nike Blazer Mid Suede",
    imgPath:
      "https://sneakernews.com/wp-content/uploads/2022/01/Nike-Air-Force-1-DC8875-001-0.jpg",
    id: 2,
  },
  {
    label: "Мужские Кроссовки Nike LeBron XVIII",
    imgPath:
      "https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    id: 3,
  },
  {
    label: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    imgPath:
      "https://media.gq.com/photos/5d93aa2c636d4800084025ae/16:9/pass/sneakers.jpg",
    id: 4,
  },
  {
    label: "Мужские Кроссовки Nike Blazer Mid Suede",
    imgPath: "https://i.insider.com/55a966f3371d22c6178b62ed?width=700",
    id: 5,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Box sx={{ maxWidth: 1300, flexGrow: 1 }}>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "green",
          }}
        >
          Топ сезона
        </h1>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 400,
                    display: "block",
                    maxWidth: 1300,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;