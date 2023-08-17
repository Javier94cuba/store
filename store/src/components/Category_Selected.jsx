import "../scss-styles/components-scss/category_selected.scss";
export function Category_Selected({ setCategory }) {
  return (
    <div className="methods">
      <h3>Selected category</h3>

      <select
        name="categorys"
        id="cat"
        // value={value}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="category">Select category</option>
        <option value="mans-clothes">Mans-Clothes</option>
        <option value="women-clothes">Womens-Clothes</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      <h3>Choose a range price</h3>
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
      {/* </div> */}
    </div>
  );
}
