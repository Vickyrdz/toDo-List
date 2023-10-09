const FiltersComponents = ({children}) => {
    return (
        <div className="flex items-center justify-between p-3 w-11/12 mb-5 gap-5">
            {children}
        </div>
    )
};

const ItemsLeft = ({total }) => {
    return (
        <p className="text-xs text-gray font-medium">
            {total} Items 
        </p>
    )
};


const FilterButtonContainer = ({children}) => {
    return (
        <div className="flex items-center gap-1 text-xs text-gray font-medium lg:ml-[3.563rem] lg:gap-[0.688rem]">
            {children}
        </div>
    )
};


const FilterButton = ({action, active, filter }) => {
    return (
        <button onClick={action} className={`hover:text-mediumBlue cursor-pointer transition-all duration-300 ease-out`
        + (active.toLowerCase().includes(filter.toLowerCase()) ? `text-green-300` : `text-strongGray`)}>
            {filter}
        </button>
    )
};




export {FiltersComponents, ItemsLeft, FilterButtonContainer, FilterButton}; 