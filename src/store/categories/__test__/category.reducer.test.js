import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE,
} from "../category.reducer";
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "../category.action";

describe("Category Reducer tests", () => {
  test("fetchCategoriesStart", () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };

    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())
    ).toEqual(expectedState);
  });

  test("fetchCategoriesSuccess", () => {
    const mockData = [
      {
        title: "men",
        imageUrl: "test",
        items: [
          { id: 1, name: "product 2" },
          { id: 2, name: "product 2" },
        ],
      },
      {
        title: "women",
        imageUrl: "test",
        items: [
          { id: 1, name: "product 2" },
          { id: 2, name: "product 2" },
        ],
      },
    ];
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockData,
    };

    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesSuccess(mockData)
      )
    ).toEqual(expectedState);
  });

  test("fetchCategoriesFailed", () => {
    const mockError = new Error("Error fetching categories");
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockError,
    };

    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesFailed(mockError)
      )
    ).toEqual(expectedState);
  });
});
