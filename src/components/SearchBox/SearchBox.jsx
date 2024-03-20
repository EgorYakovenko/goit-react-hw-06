import css from './SearchBox.module.css';

function SearchBox({ filter, onFilter }) {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements.value);
  };
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={e => onFilter(e.target.value)}
      />
    </form>
  );
}
export default SearchBox;
