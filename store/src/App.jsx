import "./scss-styles/global-styles.scss";
import { Productsview } from "./components/Productsview";
import { useState } from "react";

function App() {
  const [categorys, setCategory] = useState("");
  console.log(categorys);
  return (
    <>
      <Productsview setCategory={setCategory} categorys={categorys} />
    </>
  );
}

export default App;
