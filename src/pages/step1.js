import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { Trans } from 'react-i18next';

const ValidationSchema = Yup.object().shape({
    cocktail: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    tel: Yup.number().positive().required('Required')
});
export default function Step1(props) {
    const formik = useFormik({
        initialValues: props.data,
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            props.nextStep(values);
        },
    });
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <form>
                <TextField
                    fullWidth
                    error={formik.errors.cocktail && formik.touched.cocktail}
                    name="cocktail"
                    id="cocktail-bar"
                    label={<Trans i18nKey="cocktail_bar" />}
                    defaultValue=""
                    helperText={formik.touched.cocktail && formik.errors.cocktail}
                    onChange={formik.handleChange}
                    value={formik.values.cocktail}
                    variant="standard"
                /> <br />
                <TextField
                    fullWidth
                    name="firstName"
                    error={formik.errors.firstName && formik.touched.firstName}
                    id="first-name"
                    label={<Trans i18nKey="firstName" />}
                    defaultValue=""
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    variant="standard"
                /> <br />
                <TextField
                    error={formik.errors.lastName && formik.touched.lastName}
                    id="last-name"
                    name="lastName"
                    label={<Trans i18nKey="lastName" />}
                    defaultValue=""
                    value={formik.values.lastName}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    onChange={formik.handleChange}
                    variant="standard"
                /> <br />
                <TextField
                    type="tel"
                    name="tel"
                    error={formik.errors.tel && formik.touched.tel}
                    id="phone-number"
                    label={<Trans i18nKey="phone" />}
                    defaultValue=""
                    value={formik.values.tel}
                    helperText={formik.touched.tel && formik.errors.tel}
                    onChange={formik.handleChange}
                    variant="standard"
                /> <br />
                <TextField
                    type="email"
                    name="email"
                    id="email"
                    label={<Trans i18nKey="email" />}
                    value={formik.values.email}
                    defaultValue=""
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onChange={formik.handleChange}

                    variant="standard"
                /> <br />
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={true}
                        sx={{ mr: 1 }}
                    >
                        {<Trans i18nKey="back" />}
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={formik.handleSubmit}>
                        {<Trans i18nKey="next" />}
                    </Button>
                </Box>
            </form>
        </Box >
    );
}