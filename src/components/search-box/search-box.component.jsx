import "./search-box.styles.css";

export default function SearchBox({ onChangeHandler, placeHolder, classname }) {
  return (
    <input
      className={`search-box ${classname}`}
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  );
}
