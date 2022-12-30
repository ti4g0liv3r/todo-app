import { FaSearch } from "react-icons/fa";

export const Search = ({ search }) => {
  return (
    <article className="panel is-primary">
      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            className="input is-primary"
            type="text"
            placeholder="Search"
            onChange={(e) => search(e)}
          />
          <span className="icon is-left">
            <FaSearch />
          </span>
        </p>
      </div>
    </article>
  );
};
