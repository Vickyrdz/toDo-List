import {NextUIProvider} from "@nextui-org/react";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";
import { useEffect, useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const addTodo = (title) => {

    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1; 

    const newTodo = {
      id: (lastId || 0) + 1,
      title,
      completed: false
    }; 

    const listTodo = [...todos]
    listTodo.push(newTodo);
    setTodos(listTodo); 

  };


  const handleSetCompleted = (id) => {
    const updatedList = todos.map(todo => {
      if(todo.id === id) {
        return{
          ...todo, completed: !todo.completed}
      }
      return todo;
    })
    setTodos(updatedList); 
  };



  const handleClearCompleted = () => {
    const updatedList = todos.filter(todo => !todo.completed)
    setFilteredTodos(updatedList);
  }; 


  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList); 
  };

  const showAllTodos = () => {
     setActiveFilter("all")
  };

  const showActiveFilter = () => {
    setActiveFilter("active")
  }; 

  const showCompletedTodos = () => {
    setActiveFilter("completed")
  };

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
        const activeTodos = todos.filter(todo => todo.completed === false);
        setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
        const completedTodos = todos.filter(todo => todo.completed === true);
        setFilteredTodos(completedTodos);
    }
    
  },[activeFilter, todos]);


  return (
    <NextUIProvider>
        <div className="bg-slowGray min-h-screen flex items-center justify-center">
          <div className="container flex flex-col bg-white h-[28rem] w-[24rem] rounded-3xl lg:w-[44rem]">
            <Title/>
            <Input addTodo={addTodo}/>
            <TodoListContainer
              todos={filteredTodos}
              activeFilter={activeFilter}
              handleSetCompleted={handleSetCompleted}
              handleDelete={handleDelete}
              showAllTodos={showAllTodos}
              showActiveFilter={showActiveFilter}
              showCompletedTodos={showCompletedTodos}
              handleClearCompleted={handleClearCompleted}
            />
             
          </div>
        </div>
   </NextUIProvider>

  );
}

export default App;
