export const Header = ({ title }) => {
  return (
    <nav
      className="navbar is-primary is-spaced "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <span className="navbar-item">
          <h2 className="title is-3 has-text-white-ter ">Todo App</h2>
        </span>
      </div>
      <hr className="navbar-divider"></hr>
    </nav>
  );
};

Header.defaultProps = {
  title: "Todo App",
};
