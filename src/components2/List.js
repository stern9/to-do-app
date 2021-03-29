import { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";

const List = () => {
  const [todos, setTodos] = useContext(DataContext);

  const toggleComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editValue;
      }
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          checkComplete={toggleComplete}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </ul>
  );
};

export default List;
