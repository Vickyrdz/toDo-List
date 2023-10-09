import Filters from "../Filters/Filters";
import Todo from "../Todo/Todo";

const TodoListContainer = ({todos, handleSetCompleted, handleDelete, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearCompleted}) => {
    return(
        <div className="flex justify-center mt-[1rem] flex-col items-center">
             <Filters
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearCompleted={handleClearCompleted}/>
            
            {todos.map(todo => {
                return(
                    <Todo 
                        key={todo.id} 
                        todo={todo} 
                        handleSetCompleted={handleSetCompleted}
                        handleDelete={handleDelete}/>
                )
            })}
           
        </div>
    )
}

export default TodoListContainer; 