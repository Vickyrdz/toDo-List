import { useTranslation } from "react-i18next";
import Filters from "../Filters/Filters";
import Todo from "../Todo/Todo";

const TodoListContainer = ({
    total,
    todos,
    handleSetCompleted,
    handleDelete,
    activeFilter,
    showAllTodos,
    showActiveFilter,
    showCompletedTodos,
    handleClearCompleted,
}) => {
    const { t } = useTranslation(["empty"]);

    return(
        <div className="flex justify-center mt-[1rem] flex-col items-center">
             <Filters
                activeFilter={activeFilter}
                total={total}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveFilter}
                showCompletedTodos={showCompletedTodos}
                handleClearCompleted={handleClearCompleted}
            />
            {
                todos.length === 0 ? (
                    <div className="flex flex-col self-center mt-[4.75rem]">
                        <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
                        className="slef-center flex h-[1.563rem] text-gray"
                        > <path stroke-linecap="round" stroke-linejoin="round"d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"/>
                        </svg>
                        <p className="text-gray">{t("empty")}</p>
                    </div>
                ) : (
                    todos.map(todo => (
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                            handleSetCompleted={handleSetCompleted}
                            handleDelete={handleDelete}
                        />
                    ))
                )
            }           
        </div>
    )
}

export default TodoListContainer; 