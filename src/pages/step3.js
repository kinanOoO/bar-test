import * as React from 'react';
import { _getGenerated } from '../redux/actions/index';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import { Trans } from 'react-i18next';

export default function Step3(props) {
    const Div = styled('div')(({ theme }) => ({
        display: 'flex',
        flexWrap: 'wrap'
    }));
    const result = _getGenerated(props.data)
    return (<Box width={'100%'}>
        <Grid container spacing={1}>
            <Grid item key={13244435} md={6} xs={6} lg={6} sm={6}>
                <br />
                <Typography>
                    {<Trans i18nKey="name_of_bar" />}: {props.data.cocktail}
                </Typography>
                <br />
                <Typography>
                    {<Trans i18nKey="name_of_owner" />}: {props.data.firstName}
                </Typography>
                <br />
                <Typography>
                    {<Trans i18nKey="last_name_of_owner" />}: {props.data.lastName}
                </Typography>
                <br />
                <Typography>
                    {<Trans i18nKey="phone" />}: {props.data.tel}
                </Typography>
                <br />
                <Typography>
                    {<Trans i18nKey="email" />}: {props.data.email}
                </Typography>
                <br />
                <Typography>
                    {<Trans i18nKey="category" />}: {props.data.category}
                </Typography>
                <br />
                <Typography>
                    {<Trans i18nKey="type" />}: {props.data.type}
                </Typography>
                <br />
                <Typography>
                    {<Trans i18nKey="glass" />}: {props.data.glass}
                </Typography>
                <br />
                <Typography>
                    {<Trans i18nKey="ingredients" />}: {props.data.ingredients.map(one => one)}
                </Typography>
            </Grid>
            <Grid item key={13244335} md={6} xs={6} lg={6} sm={6} >
                <br />
                {<Trans i18nKey="generated" />}:
                {result.length > 0 && result.map((drink) => (
                    <Grid item key={drink.idDrink} md={6} xs={12} lg={6} sm={12}>
                        <br />
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    // 16:9
                                    pt: '1%',
                                }}
                                image={drink.strDrinkThumb}
                                alt={drink.strDrink}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    {drink.strDrink}
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
            </Grid>
        </Grid>
    </Box >)
}