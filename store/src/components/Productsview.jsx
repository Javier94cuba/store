import { useFetch } from "./useFetch"; //Custom Hooks for fetch data
import "../scss-styles/components-scss/productsview.scss";

export function Productsview() {
  const { data } = useFetch("https://fakestoreapi.com/products");
  return (
    <>
      <main>
        <h1>Fake Store</h1>
        <div className="card">
          {data.map((product) => (
            <div className="product" key={product.id}>
              <img
                className="img"
                src={product.image}
                alt="{product.description}"
              />
              <p>{product.title}</p>
              <p>{product.price} $</p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
