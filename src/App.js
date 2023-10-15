import {NextUIProvider} from "@nextui-org/react";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";
import { useEffect, useMemo, useState } from "react";
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";

const MAX_ITEMS_PER_PAGE = 5;

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [selectedPage, setSelectedPage] = useState(1);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1; 
    const newTodo = {
      id: (lastId || 0) + 1,
      title,
      completed: false
    }; 

    const listTodo = [...todos]
    listTodo.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(listTodo));
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
    setSelectedPage(1);
  },[activeFilter, todos]);

  // pages es necesario para poder siempre tener actualizado el listado
  const pages = useMemo(() => {
    if (filteredTodos.length === 0) return[[]];
    // mi listado de páginas arranca en vacio, pero sigue siendo una lista
    const allPages = [];
    // necesito tomar cada elemento y ponerlo en la página correcta
    for(let i = 0; i < filteredTodos.length; i++) {
      // tomo el número entero más bajo dentro de la división del índice actual y la cantidad máxima
      // 0 / 3 --> 0 --> page --> 0
      // 1 / 3 --> 0.33 --> page --> 0
      // 3 / 3 --> 1 --> page --> 1
      // 13 / 3 --> 4.33 --> page --> 4
      const pageNumber = Math.floor(i / MAX_ITEMS_PER_PAGE);
      // tomo el elemento en cuestión
      const element = filteredTodos[i];

      // si el resto es 0 
      // quiere decir que es el primer elemento de la página
      // entonces creo una nueva página
      if (i % MAX_ITEMS_PER_PAGE === 0) {
        allPages.push([]);
      }
      // agrego el elemento a la pagina correspondiente
      allPages[pageNumber].push(element)
    }
    // disponibilizar las paginas
    return allPages;
  }, [filteredTodos]);

  return (
    <NextUIProvider>
      <Navbar/>
      <div className="bg-slowGray dark:bg-darkStrongGray min-h-screen flex items-center flex-col justify-center">
        
        <div className="container flex flex-col bg-white dark:bg-darkGray h-[28rem] w-[24rem] rounded-3xl lg:w-[44rem]">
          <Title />
          <Input addTodo={addTodo} />
          <TodoListContainer
            total={filteredTodos.length}
            todos={pages[selectedPage - 1]}
            activeFilter={activeFilter}
            handleSetCompleted={handleSetCompleted}
            handleDelete={handleDelete}
            showAllTodos={showAllTodos}
            showActiveFilter={showActiveFilter}
            showCompletedTodos={showCompletedTodos}
            handleClearCompleted={handleClearCompleted}
          /> 
        </div>
          <div className="flex self-center relative bottom-12 gap-5">
            <Pagination
              pages={pages.length}
              onPageChange={setSelectedPage}
              currentPage={selectedPage}
            />
          </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
