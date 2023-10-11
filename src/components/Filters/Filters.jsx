import { useTranslation } from "react-i18next";
import { FilterButton, FilterButtonContainer, FiltersComponents, ItemsLeft } from "./FiltersComponents";

const Filters = ({total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearCompleted}) => {

    const { t } = useTranslation(["filters"]);

    return (
        <FiltersComponents>
            <ItemsLeft total={total}/>
            <FilterButtonContainer>
                <FilterButton action={()=> showAllTodos()} active={activeFilter} filter={t("All")}/>
                <FilterButton action={()=> showActiveTodos()} active={activeFilter} filter={t("Active")}/>
                <FilterButton action={()=> showCompletedTodos()} active={activeFilter} filter={t("Completed")}/>
            </FilterButtonContainer>

            <button onClick={()=> handleClearCompleted()} className="text-xs text-gray font-medium hover:text-red-400 lg:text-sm">
                {t("Clear")}
            </button>
        </FiltersComponents>
    )
}

export default Filters; 