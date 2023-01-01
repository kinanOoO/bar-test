import * as React from 'react';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { _getCategories, _getAlcoholic, _getGlasses, _getIngredients } from '../redux/actions/index';
import FormHelperText from '@mui/material/FormHelperText';
import { Trans } from 'react-i18next';

const ValidationSchema = Yup.object().shape({
    category: Yup.string()
        .required('Required'),
    type: Yup.string()
        .required('Required'),
    glass: Yup.string()
        .required('Required'),
    ingredients: Yup.array().of(
        Yup.string().required()
    ).required()
});
export default function Step2(props) {
    const formik = useFormik({
        initialValues: props.data,
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            props.nextStep(values);
        },
    });
    let categories = useSelector(state => state.CocktailReducer.categories);
    let types = useSelector(state => state.CocktailReducer.types);
    let glasses = useSelector(state => state.CocktailReducer.glasses);
    let ingredients = useSelector(state => state.CocktailReducer.ingredients);
    React.useEffect(() => {
        if (categories.length < 1) {
            _getCategories()
        }
        if (types.length < 1) {
            _getAlcoholic()
        }
        if (glasses.length < 1) {
            _getGlasses()
        }
        if (ingredients.length < 1) {
            _getIngredients()
        }
    })
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
                <br /><br />
                <FormControl fullWidth error={formik.touched.category && formik.errors.category}>
                    <InputLabel id="category-label">{<Trans i18nKey="category" />}</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        name="category"
                        value={formik.values.category}
                        label={<Trans i18nKey="category" />}
                        onChange={formik.handleChange}
                    >
                        {categories.map((category) => <MenuItem value={category.strCategory}>
                            {category.strCategory}
                        </MenuItem>)}
                    </Select>
                    <FormHelperText color='danger'>{formik.touched.category && formik.errors.category}</FormHelperText>
                </FormControl> <br /><br />
                <FormControl fullWidth error={formik.touched.type && formik.errors.type}>
                    <InputLabel id="type-label">{<Trans i18nKey="type" />}</InputLabel>
                    <Select
                        labelId="type-label"
                        id="type"
                        name="type"
                        value={formik.values.type}
                        label={<Trans i18nKey="type" />}
                        onChange={formik.handleChange}
                    >
                        {types.map((type) => <MenuItem value={type.strAlcoholic}>
                            {type.strAlcoholic}
                        </MenuItem>)}
                    </Select>
                    <FormHelperText color='danger'>{formik.touched.type && formik.errors.type}</FormHelperText>
                </FormControl> <br /><br />
                <FormControl fullWidth error={formik.touched.glass && formik.errors.glass}>
                    <InputLabel id="glass-label">{<Trans i18nKey="glass" />}</InputLabel>
                    <Select
                        labelId="glass-label"
                        id="glass"
                        name="glass"
                        value={formik.values.glass}
                        label={<Trans i18nKey="glass" />}
                        onChange={formik.handleChange}
                    >
                        {glasses.map((glass) => <MenuItem value={glass.strGlass}>
                            {glass.strGlass}
                        </MenuItem>)}
                    </Select>
                    <FormHelperText color='danger'>{formik.touched.glass && formik.errors.glass}</FormHelperText>
                </FormControl> <br /><br />
                <FormControl fullWidth error={formik.touched.ingredients && formik.errors.ingredients}>
                    <InputLabel id="ingredients-label">{<Trans i18nKey="ingredients" />}</InputLabel>
                    <Select
                        labelId="ingredients-label"
                        id="ingredients"
                        name="ingredients"
                        value={formik.values.ingredients}
                        label={<Trans i18nKey="ingredients" />}
                        onChange={formik.handleChange}
                        multiple
                    >
                        {ingredients.map((ingredient) => <MenuItem value={ingredient.strIngredient1}>
                            {ingredient.strIngredient1}
                        </MenuItem>)}
                    </Select>
                    <FormHelperText color='danger'>{formik.touched.ingredients && formik.errors.ingredients}</FormHelperText>
                </FormControl> <br />
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        sx={{ mr: 1 }}
                        onClick={() => props.handleBack()}
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