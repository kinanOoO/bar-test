// **  Initial State
const initialState = {
  cocktails: [],
  filteredCocktails: [],
  categories: [],
  types: [],
  glasses: [],
  ingredients: [],
  isFiltered: false
}

export const CocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "storeCocktails":
      return ({
        ...state,
        cocktails: action.payload,
        isFiltered: action.isFiltered
      })
    case "storeFilteredCocktails":
      return ({
        ...state,
        filteredCocktails: action.payload,
        isFiltered: action.isFiltered
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