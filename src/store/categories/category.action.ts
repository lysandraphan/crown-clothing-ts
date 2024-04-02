// internal
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction, Action, ActionWithPayLoad, withMatcher } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE, Category } from "./category.types";


// -------------------------- TYPE --------------------------
export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayLoad<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayLoad<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, Error>

// -------------------------- FUNCTION --------------------------
export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess =>
  createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  ));

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error));


//context
// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);

//thunk
// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocuments();
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// };
