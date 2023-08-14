import { useState } from "react";
import "../scss-styles/components-scss/category_selected.scss";
export function Category_Selected() {
  const [category, SetCategory] = useState(false);

  return (
    <div className="methods">
      <section>
        <h2>Selected category</h2>
        <select name="categorys" id="cat">
          <option value="category">Select category</option>
          <option value="category">Mans-Clothes</option>
          <option value="php">Womens-Clothes</option>
          <option value="java">Jewelery</option>
          <option value="golang">Electronics</option>
        </select>
      </section>

      <div className="price_selected">
        <h2>Choose a range price</h2>
        <input
          id="pi_input"
          className="input_bar"
          type="range"
          min="0"
          max="1000"
          step="1"
        />
        <br />
        <output id="value" className="value">
          {" "}
          Value: 1
        </output>
      </div>
    </div>
  );
}
