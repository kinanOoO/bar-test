import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import { Trans } from 'react-i18next';

const steps = [<Trans i18nKey="step1" />, <Trans i18nKey="step2" />, <Trans i18nKey="step3" />];

export default function Application(props) {
    const [data, setData] = React.useState({
        cocktail: "",
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        category: "",
        type: "",
        glass: "",
        ingredients: []
    });
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = (step, data2) => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        console.log(step, data2)
        if (step === 1) {
            setData({
                ...data,
                cocktail: data2.cocktail,
                firstName: data2.firstName,
                lastName: data2.lastName,
                tel: data2.tel,
                email: data2.email
            })
        }
        if (step === 2) {
            setData({
                ...data,
                category: data2.category,
                glass: data2.glass,
                type: data2.type,
                ingredients: data2.ingredients
            })
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setData({
            cocktail: "",
            firstName: "",
            lastName: "",
            email: "",
            tel: "",
            category: "",
            type: "",
            glass: "",
            ingredients: []
        });
        setActiveStep(0);
    };

    return (
        <Box md={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        <Trans i18nKey="all_complete" />
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                        <Button onClick={() => { props.close() }}>Close</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {activeStep === 0 ? <Step1 data={data} nextStep={(data) => handleNext(1, data)} /> : <></>}
                    {activeStep === 1 ? <Step2 data={data} nextStep={(data) => handleNext(2, data)} handleBack={() => handleBack()}></Step2> : <></>}
                    {activeStep === 2 ? <Step3 data={data}></Step3> : <></>}
                    {(activeStep !== 0 && activeStep !== 1) ? <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            <Trans i18nKey="back" />
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? <Trans i18nKey="finish" /> : <Trans i18nKey="next" />}
                        </Button>
                    </Box> : <></>}
                </React.Fragment>
            )}
        </Box>
    );
}
