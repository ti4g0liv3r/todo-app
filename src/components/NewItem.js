import { useState } from "react";

export const NewItem = ({ addNewItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
  });
  const [addItem, setAddItem] = useState(false);

  const handleChange = (e) => {
    const newState =
      e.target.name === "name"
        ? { ...newItem, name: e.target.value }
        : { ...newItem, description: e.target.value };

    setNewItem(newState);
  };

  const saveAndCleanState = () => {
    addNewItem(newItem);
    setNewItem({
      name: "",
      description: "",
    });
    setAddItem(false);
  };

  const cancelAndCloseModal = () => {
    setNewItem({
      name: "",
      description: "",
    });
    setAddItem(false);
  };

  const disableButton =
    newItem.name.length === 0 || newItem.description.length === 0;

  return (
    <div className="box">
      <div className={`modal ${addItem && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <p className="title">Add new item</p>
            <hr className="navbar-divider"></hr>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Task title"
                  name="name"
                  id="input"
                  value={newItem.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Item description"
                  value={newItem.description}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-primary"
                  id="textarea"
                  name="description"
                  disabled={disableButton}
                  onClick={() => saveAndCleanState()}
                >
                  Save
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-light"
                  onClick={() => cancelAndCloseModal()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="is-flex  is-flex-direction-row is-justify-content-flex-end">
        <button className="button is-primary" onClick={() => setAddItem(true)}>
          Add item
        </button>
      </div>
    </div>
  );
};
