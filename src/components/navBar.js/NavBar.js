import "./NavBar.css";

const NavBar = ({ categories, fetchingCategory }) => {
  return (
    <div className='navBarWrapper'>
      {categories.map((category) => (
        <button key={category.id} onClick={() => fetchingCategory(category)}>
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
