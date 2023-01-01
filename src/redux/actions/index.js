import axios from "axios";
import { store } from "../storeConfig/store";
import { useSelector } from "react-redux";
//************************************//
export const _getCocktails = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/search.php?s`)
    store.dispatch({
        type: "storeCocktails",
        payload: res.data?.drinks,
        isFiltered: false
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
    while (cocktail[`strIngredient${i}`] !== null && i < 16) {
        if (ingredients.find(ingredient => ingredient === cocktail[`strIngredient${i}`])) {
            result = true;
            i++
        }
        else {
            result = false;
            i++
        }
    }
    return result
}
//************************************//
export const checkFilterIngredients = (ingredients, cocktail) => {
    let result = true;
    let i = 1;
    while (cocktail[`strIngredient${i}`] !== null && i < 16) {
        if (ingredients.find(ingredient => ingredient === cocktail[`strIngredient${i}`])) {
            result = true;
            i++
            break;
        }
        else {
            result = false;
            i++
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
            (checkFilterIngredients(data.ingredients, cocktail) || data.ingredients.length < 1)
    })
    store.dispatch({
        type: "storeFilteredCocktails",
        payload: result,
        isFiltered: true
    })
}
//************************************//