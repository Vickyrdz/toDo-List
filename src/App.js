import {NextUIProvider} from "@nextui-org/react";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination/Pagination";


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
          <Title />
          <Input addTodo={addTodo} />
          {filteredTodos.length === 0 ? (
            <div className="flex flex-col self-center mt-[7.75rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
                className="slef-center flex h-[1.563rem] text-gray"
              > <path stroke-linecap="round" stroke-linejoin="round"d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"/>
              </svg>
              <p className="text-gray">There are no tasks yet</p>
            </div>
          ) : (
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
          )}
          {/* <Pagination listTodos={filteredTodos}/> */}
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
