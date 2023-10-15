import React from "react";
import {Pagination as NUIPagination, PaginationItemType, cn} from "@nextui-org/react";


export default function Pagination({ currentPage, pages, onPageChange }) {
  const renderItem = ({
    ref,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button onClick={onNext}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" className="text-strongGray dark:hover:text-white" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
      </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button onClick={onPrevious}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" className="text-strongGray dark:hover:text-white" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return <button>...</button>;
    }

    // cursor is the default item
    return (
      <button
        ref={ref}
        onClick={() => setPage(value)}
        className={cn
          (  className, "dark:bg-darkGray"
          )
        }
        
      >
        {value} 
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-5 self-center">
      <NUIPagination
        total={pages}
        classNames={{
          cursor: 'text-white px-3 w-[2.188rem] bg-mediumBlue'
        }}
        initialPage={1}
        onChange={onPageChange}
        page={currentPage}
        showControls
        renderItem={renderItem}
        />
    </div>
  );
}
