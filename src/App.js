import { Header, TodoItem, NewItem, Search } from "./components";
import { useState } from "react";

export const App = () => {
  const defaultItems = JSON.parse(localStorage.getItem("items"));
  const [searchItem, setSearchItem] = useState("");
  const [items, setItem] = useState(defaultItems || []);
  console.log(items);

  const saveToLocalStorage = (itemsToSave) => {
    localStorage.setItem("items", JSON.stringify(itemsToSave));
  };

  const handleClick = (id) => {
    const newListItem = items.map((item) =>
      item.id === id ? { ...item, isCheck: !item.isCheck } : item
    );
    setItem(newListItem);
    saveToLocalStorage(newListItem);
  };

  const addNewItem = (newItem) => {
    const { name, description } = newItem;
    const existingId = items.filter(({ id }) => items.length + 1 === id);
    const newId = existingId.length ? existingId[0].id + 1 : items.length + 1;
    const newItemsList = [
      ...items,
      { name, description, date: "", isCheck: false, id: newId },
    ];

    setItem(newItemsList);
    saveToLocalStorage(newItemsList);
  };

  const removeItem = (id) => {
    const newItemList = items.filter((item) => item.id !== id);
    setItem(newItemList);
    saveToLocalStorage(newItemList);
  };

  const search = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };

  const filteredItems = items.filter(
    ({ name, description }) =>
      name.toLowerCase().includes(searchItem) ||
      description.toLowerCase().includes(searchItem)
  );

  return (
    <main>
      <Header />
      <Search search={search} />
      <TodoItem
        items={filteredItems}
        handleClick={handleClick}
        removeItem={removeItem}
      />
      <NewItem addNewItem={addNewItem} />
    </main>
  );
};

export default App;
