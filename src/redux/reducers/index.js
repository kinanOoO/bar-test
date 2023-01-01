// **  Initial State
const initialState = {
  cocktails: [],
  categories: [],
  types: [],
  glasses: [],
  ingredients: []
}

export const CocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "storeCocktails":
      return ({
        ...state,
        cocktails: action.payload
      })
    case "storeGlasses":
      return ({
        ...state,
        glasses: action.payload
      })
    case "storeIngredients":
      return ({
        ...state,
        ingredients: action.payload
      })
    case "storeAlcoholic":
      return ({
        ...state,
        types: action.payload
      })
    case "storeCategories":
      return ({
        ...state,
        categories: action.payload
      })
    default:
      return state
  }
}