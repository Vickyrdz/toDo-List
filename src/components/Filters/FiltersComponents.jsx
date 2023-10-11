// import i18next from "i18next";
import { useTranslation } from "react-i18next";



const FiltersComponents = ({children}) => {
    return (
        <div className="flex items-center justify-between p-3 w-11/12 mb-5 gap-5">
            {children}
        </div>
    )
};

const ItemsLeft = ({ total }) => {
    const { t } = useTranslation(["item"]);

    return (
        <p className="text-xs text-gray font-medium lg:text-sm">
            {t('item', {count: total})}
        </p>
    )
};


const FilterButtonContainer = ({children}) => {
    return (
        <div className="flex items-center gap-1 text-xs text-gray font-medium lg:ml-[3.563rem] lg:gap-[0.688rem] lg:text-sm">
            {children}
        </div>
    )
};


const FilterButton = ({action, active, filter }) => {
    return (
        <button onClick={action} className={`hover:text-mediumBlue cursor-pointer transition-all duration-300 ease-out lg:text-sm`
        + (active.toLowerCase().includes(filter.toLowerCase()) ? `text-green-300` : `text-strongGray`)}>
            {filter}
        </button>
    )
};




export {FiltersComponents, ItemsLeft, FilterButtonContainer, FilterButton}; 