import { useFetch } from "./useFetch"; //Custom Hooks for fetch data
import "../scss-styles/components-scss/productsview.scss";
import { Category_Selected } from "./Category_Selected";

export function Productsview({ setCategory, categorys }) {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const newdata = data.filter(
    (products) => products.category === `${categorys}`
  );
  console.log(categorys);
  return (
    <main>
      <h1>Fake Store</h1>
      <h1>{categorys}</h1>
      <Category_Selected setCategory={setCategory} />
      {categorys === "" || categorys === "category" ? (
        <div className="card">
          {loading && <h1> Loading...</h1>}
          {error && <h1>Error: {error}</h1>}
          {data.map((product) => (
            <div className="product" key={product.id}>
              <img
                className="img"
                src={product.image}
                alt={product.description}
              />
              <p className="title-product">{product.title}</p>
              <p className="price">{product.price} $</p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="card">
          {loading && <h1> Loading...</h1>}
          {error && <h1>Error: {error}</h1>}
          {newdata.map((product) => (
            <div className="product" key={product.id}>
              <img
                className="img"
                src={product.image}
                alt={product.description}
              />
              <p className="title-product">{product.title}</p>
              <p className="price">{product.price}</p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
