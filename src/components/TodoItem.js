import { FaTrashAlt, FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

export const TodoItem = ({ items, handleClick, removeItem }) => {
  return (
    <div className="content m-3">
      {items.length ? (
        items.map(({ id, name, description, date, isCheck }) => {
          return (
            <div className="card mb-3" key={`item${id}`}>
              <header className="card-header">
                <p
                  className={`card-header-title mb-0 ${
                    isCheck && "has-text-grey-lighter"
                  }`}
                >
                  {name}
                </p>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon mr-4" onClick={() => handleClick(id)}>
                    {!isCheck ? <FaRegCircle /> : <FaRegCheckCircle />}
                  </span>
                  <span className="icon" onClick={() => removeItem(id)}>
                    <FaTrashAlt />
                  </span>
                </button>
              </header>
              <div className="card-content">
                <div
                  className={`content ${isCheck && "has-text-grey-lighter"}`}
                >
                  {description}
                  <br />
                  <time>{date && date.toDateString()}</time>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="box">
          <div className="block has-text-centered">
            There's no <strong>item</strong> in your list.
          </div>
        </div>
      )}
    </div>
  );
};
