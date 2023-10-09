import { FilterButton, FilterButtonContainer, FiltersComponents, ItemsLeft } from "./FiltersComponents";

const Filters = ({total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearCompleted}) => {
    return (
        <FiltersComponents>
            <ItemsLeft total={total}/>
            <FilterButtonContainer>
                <FilterButton action={()=> showAllTodos()} active={activeFilter} filter="All"/>
                <FilterButton action={()=> showActiveTodos()} active={activeFilter} filter="Active"/>
                <FilterButton action={()=> showCompletedTodos()} active={activeFilter} filter="Completed"/>
            </FilterButtonContainer>

            <button onClick={()=> handleClearCompleted()} className="text-xs text-gray font-medium hover:text-red-400">
                Clear Completed
            </button>
        </FiltersComponents>
    )
}

export default Filters; 