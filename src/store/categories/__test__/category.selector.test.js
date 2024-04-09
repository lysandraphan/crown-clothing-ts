import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../category.selector";

const mockState = {
  categories: {
    isLoading: false,
    categories: [
      {
        title: "men",
        imageUrl: "test",
        items: [
          { id: 1, name: "product 1" },
          { id: 2, name: "product 2" },
        ],
      },
      {
        title: "women",
        imageUrl: "test",
        items: [
          { id: 3, name: "product 3" },
          { id: 4, name: "product 4" },
        ],
      },
    ],
  },
};

describe("Category Selector", () => {
  test("selectCategories should return the categories data", () => {
    const categoriesSlice = selectCategories(mockState);

    expect(categoriesSlice).toEqual(mockState.categories.categories);
  });

  test("selectCategoriesIsLoading should return isLoading state", () => {
    const isLoading = selectCategoriesIsLoading(mockState);

    expect(isLoading).toEqual(false);
  });

  test("selectCategoriesMap should convert the items array into the appropriate map", () => {
    const expectedCategoriesMap = {
      men: [
        { id: 1, name: "product 1" },
        { id: 2, name: "product 2" },
      ],
      women: [
        { id: 3, name: "product 3" },
        { id: 4, name: "product 4" },
      ],
    };
    const categoriesMap = selectCategoriesMap(mockState);
    expect(categoriesMap).toEqual(expectedCategoriesMap);
  });
});
