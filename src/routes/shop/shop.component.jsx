import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// internal
import { fetchCategoriesStart } from "../../store/categories/category.action";

// styles
import "./shop.styles.scss";

// components
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

export default function Shop() {
  const dispatch = useDispatch();

  // fetch category map
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
