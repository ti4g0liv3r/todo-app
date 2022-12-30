import { Header, TodoItem, NewItem, Search } from "./components";
import { useState } from "react";

export const App = () => {
  const [searchItem, setSearchItem] = useState("");
  const [items, setItem] = useState([
    {
      name: "Comprar arroz",
      description: "Lorem Ipsum",
      date: "",
      isCheck: false,
      id: 1,
    },
    {
      name: "Comprar alubias",
      description: "Lorem Ipsum",
      date: "",
      isCheck: true,
      id: 2,
    },
    {
      name: "Comprar pollo",
      description: "Lorem Ipsum",
      date: "",
      isCheck: false,
      id: 3,
    },
  ]);

  const handleClick = (id) => {
    const newListItem = items.map((item) =>
      item.id === id ? { ...item, isCheck: !item.isCheck } : item
    );
    setItem(newListItem);
  };

  const addNewItem = (newItem) => {
    const { name, description } = newItem;
    const newId = items.length + 1;
    const newItemsList = [
      ...items,
      { name, description, date: "", isCheck: false, id: newId },
    ];

    setItem(newItemsList);
  };

  const removeItem = (id) => {
    const newItemList = items.filter((item) => item.id !== id);
    setItem(newItemList);
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
