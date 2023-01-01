import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal'
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { _getCocktails } from '../redux/actions';
import { useSelector } from 'react-redux';
import Application from './application'
import { purple } from '@mui/material/colors';
import Fade from '@mui/material/Fade';
import Loader from '../components/loader';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { _getCategories, _getAlcoholic, _getGlasses, _getIngredients, _getFeltered } from '../redux/actions/index';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Footer from './footer';
import { useTranslation, Trans } from 'react-i18next';

const theme = createTheme({
    display: 'flex'
});
const Div = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap'
}));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '0.5px solid #000',
    boxShadow: 24,
    p: 3,
    py: 3,
    minWidth: '70%'
};
const style2 = {
    position: 'absolute',
    minWidth: '75%'
};
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[200]),
    backgroundColor: purple[200],
    '&:hover': {
        backgroundColor: purple[100],
    },
}));
const lngs = {
    en: { nativeName: 'English' },
    tr: { nativeName: 'turkish' }
};
export default function Main() {
    const { i18n } = useTranslation();
    const [isApply, setIsApply] = React.useState(false);
    const drinks = useSelector(state => state.CocktailReducer.cocktails);
    if (drinks.length < 1) {
        _getCocktails();
    }
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
    const ValidationSchema = Yup.object();
    const formik = useFormik({
        initialValues: {
            category: "",
            type: "",
            glass: "",
            ingredients: []
        },
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            _getFeltered(values);
        },
        onReset: () => {
            _getCocktails();
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed" color="inherit" sx={{ backgroundImage: "url(https://thumbs.dreamstime.com/z/row-fancy-decorative-fruity-cocktails-isolated-white-background-260513900.jpg)", "background-position": "center" }}>
                <Toolbar>
                    <Typography
                        variant="h4"
                        noWrap
                        fontFamily="fantasy"
                        component="div"
                        color={purple[100]}
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Trans i18nKey="title" />
                    </Typography>
                    {Object.keys(lngs).map((lng) => (
                        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                    <ColorButton sx={{ marginLeft: '1%' }} variant="contained" onClick={() => { setIsApply(true) }}><Trans i18nKey="apply" /></ColorButton>
                </Toolbar>
            </AppBar>
            <br />
            <main>
                <Modal
                    open={isApply}
                    onClose={() => { setIsApply(false) }}
                    position="relative"
                    closeAfterTransition
                    sx={style2}
                >
                    <Fade in={isApply}>
                        <Box sx={style} >
                            <Application close={() => { setIsApply(false) }} />
                        </Box>
                    </Fade>
                </Modal>
                <Container sx={{ py: 7, backgroundImage: "url(https://thumbs.dreamstime.com/z/background-paper-tubes-frame-banner-cocktail-tubes-party-banner-cocktails-bar-elegant-paper-drinking-straws-background-198480888.jpg)" }} fixed >
                    <br />
                    <form>
                        <Card>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1.2} sx={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: "space-between", flexWrap: "wrap" }}>
                                    <Grid item key={86789} xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="category-label1"><Trans i18nKey="category" /></InputLabel>
                                            <Select
                                                labelId="category-label1"
                                                id="category"
                                                name="category"
                                                value={formik.values.category}
                                                label="Category"
                                                onChange={formik.handleChange}
                                            >
                                                {categories.map((category) => <MenuItem value={category.strCategory}>
                                                    {category.strCategory}
                                                </MenuItem>)}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item key={21456} xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="type-label"><Trans i18nKey="type" /></InputLabel>
                                            <Select
                                                labelId="type-label"
                                                id="type"
                                                name="type"
                                                value={formik.values.type}
                                                label="type"
                                                onChange={formik.handleChange}
                                            >
                                                {types.map((type) => <MenuItem value={type.strAlcoholic}>
                                                    {type.strAlcoholic}
                                                </MenuItem>)}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item key={23423} xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="glass-label"><Trans i18nKey="glass" /></InputLabel>
                                            <Select
                                                labelId="glass-label"
                                                id="glass"
                                                name="glass"
                                                value={formik.values.glass}
                                                label="glass"
                                                onChange={formik.handleChange}
                                            >
                                                {glasses.map((glass) => <MenuItem value={glass.strGlass}>
                                                    {glass.strGlass}
                                                </MenuItem>)}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item key={768768} xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="ingredients-label"><Trans i18nKey="ingredients" /></InputLabel>
                                            <Select
                                                labelId="ingredients-label"
                                                id="ingredients"
                                                name="ingredients"
                                                value={formik.values.ingredients}
                                                label="ingredients"
                                                onChange={formik.handleChange}
                                                multiple
                                            >
                                                {ingredients.map((ingredient) => <MenuItem value={ingredient.strIngredient1}>
                                                    {ingredient.strIngredient1}
                                                </MenuItem>)}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item key={762264} xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <FormControl fullWidth>
                                            <ColorButton onClick={formik.handleReset}>
                                                <Trans i18nKey="reset" />
                                            </ColorButton>
                                        </FormControl>
                                    </Grid>
                                    <Grid item key={768764} xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <FormControl fullWidth>
                                            <ColorButton onClick={() => formik.handleSubmit()}>
                                                <Trans i18nKey="filter" />
                                            </ColorButton>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </form>
                    <br />
                    {drinks.length > 0 ?
                        <Grid container spacing={3}>
                            {drinks.map((drink) => (
                                <Grid item key={drink.idDrink} xs={12} sm={6} md={4} lg={3} xl={2}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: '0%',
                                            }}
                                            image={drink.strDrinkThumb}
                                            alt={drink.strDrink}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2" >
                                                {drink.strDrink}
                                            </Typography>
                                            <Typography>
                                                {drink.strInstructions}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Div>
                                                {drink.strIngredient1 ? <Typography fontSize={9} color="#220303" bgcolor="rgb(122 0 255 / 30%)" padding={0.5} variant="button" marginBottom="5%" marginRight="3%">
                                                    {drink.strIngredient1}
                                                </Typography> : <></>}
                                                {drink.strIngredient2 ? <Typography fontSize={9} color="#220303" bgcolor="rgb(122 0 255 / 30%)" padding={0.5} variant="button" marginBottom="5%" marginRight="3%">
                                                    {drink.strIngredient2}
                                                </Typography> : <></>}{drink.strIngredient3 ? <Typography fontSize={9} color="#220303" bgcolor="rgb(122 0 255 / 30%)" padding={0.5} variant="button" marginBottom="5%" marginRight="3%">
                                                    {drink.strIngredient3}
                                                </Typography> : <></>}{drink.strIngredient4 ? <Typography fontSize={9} color="#220303" bgcolor="rgb(122 0 255 / 30%)" padding={0.5} variant="button" marginBottom="5%" marginRight="3%">
                                                    {drink.strIngredient4}
                                                </Typography> : <></>}{drink.strIngredient5 ? <Typography fontSize={9} color="#220303" bgcolor="rgb(122 0 255 / 30%)" padding={0.5} variant="button" marginBottom="5%" marginRight="3%">
                                                    {drink.strIngredient5}
                                                </Typography> : <></>}{drink.strIngredient6 ? <Typography fontSize={9} color="#220303" bgcolor="rgb(122 0 255 / 30%)" padding={0.5} variant="button" marginBottom="5%" marginRight="3%">
                                                    {drink.strIngredient6}
                                                </Typography> : <></>}{drink.strIngredien7 ? <Typography fontSize={9} color="#220303" bgcolor="rgb(122 0 255 / 30%)" padding={0.5} variant="button" marginBottom="5%" marginRight="3%">
                                                    {drink.strIngredient7}
                                                </Typography> : <></>}{drink.strIngredient8 ? <Typography fontSize={9} color="#220303" bgcolor="rgb(122 0 255 / 30%)" padding={0.5} variant="button" marginBottom="5%" marginRight="3%">
                                                    {drink.strIngredient8}
                                                </Typography> : <></>}
                                            </Div>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid> : <Loader />}
                </Container>
            </main>
            <Footer />
        </ThemeProvider >
    );
}