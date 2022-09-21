import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "my first book",
    discription: "the first book I ever read",
  },
  {
    id: "p2",
    price: 5,
    title: "my second book",
    discription: "the second book I ever read",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.discription}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
