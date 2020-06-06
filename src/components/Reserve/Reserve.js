import React from 'react';
import './Reserve.scss';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MDBContainer } from 'mdbreact';
import ReviewHouse from '../ReviewHouse/ReviewHouse';
import WhosComing from '../WhosComing/WhosComing';
import ConfirmPay from '../ConfirmPay/ConfirmPay';


function getSteps() {
    return ['Review house rules', "Who's coming?", 'Confirm and Pay'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ReviewHouse />;
      case 1:
        return <WhosComing />;
      case 2:
        return <ConfirmPay />;
      default:
        return 'Unknown step';
    }
  }
  

const Reserve = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <MDBContainer>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                    labelProps.optional = <Typography variant="caption">Optional</Typography>;
                }
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
      </MDBContainer>
        </div>
    );
};

export default Reserve;