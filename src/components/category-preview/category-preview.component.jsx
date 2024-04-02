import { Link } from "react-router-dom";

// styles
import "./category-preview.styles.scss";

// components
import ProductCard from "../product-card/product-card.component";

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2 className="title">
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
