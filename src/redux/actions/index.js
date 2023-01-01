import axios from "axios";
import { store } from "../storeConfig/store";
import { useSelector } from "react-redux";
//************************************//
export const _getCocktails = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/search.php?s`)
    store.dispatch({
        type: "storeCocktails",
        payload: res.data?.drinks
    })
}
//************************************//
export const _getGlasses = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/list.php?g=list`)
    store.dispatch({
        type: "storeGlasses",
        payload: res.data?.drinks
    })
}
//************************************//
export const _getIngredients = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/list.php?i=list`)
    store.dispatch({
        type: "storeIngredients",
        payload: res.data?.drinks
    })
}
//************************************//
export const _getAlcoholic = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/list.php?a=list`)
    store.dispatch({
        type: "storeAlcoholic",
        payload: res.data?.drinks
    })
}
//************************************//
export const _getCategories = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/list.php?c=list`)
    store.dispatch({
        type: "storeCategories",
        payload: res.data?.drinks
    })
}
//************************************//
export const _getGenerated = (data) => {
    const cocktails = useSelector(state => state.CocktailReducer.cocktails);
    const result = cocktails.filter((cocktail) => {
        return data.category === cocktail.strCategory &&
            data.glass === cocktail.strGlass &&
            data.type === cocktail.strAlcoholic &&
            checkIngredients(data.ingredients, cocktail)
    })
    return result
}
//************************************//
export const checkIngredients = (ingredients, cocktail) => {
    let result = true;
    let i = 1;
    for (i = 1; i < 16; i++) {
        if (cocktail[`Ingredient${i}`] !== null) {
            if (cocktail[`Ingredient${i}`] in ingredients) {
                result = true;
            }
            else {
                result = false;
                break;
            }
        } else {
            break;
        }
    }
    return result
}
//************************************//
export const _getFeltered = (data) => {
    const cocktails = store.getState().CocktailReducer.cocktails;
    const result = cocktails.filter((cocktail) => {
        return (data.category === cocktail.strCategory || data.category === "") &&
            (data.glass === cocktail.strGlass || data.glass === "") &&
            (data.type === cocktail.strAlcoholic || data.type === "") &&
            (checkIngredients(data.ingredients, cocktail) || data.ingredients.length < 1)
    })
    store.dispatch({
        type: "storeCocktails",
        payload: result
    })
}
//************************************//