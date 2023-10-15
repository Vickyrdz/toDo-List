import { Divider } from "@nextui-org/react";

const Todo = ({todo, handleSetCompleted, handleDelete}) => {

    const {id, title, completed} = todo;

    return (
        <div className="flex flex-col w-4/5">
             <div className="flex items-center justify-between bg-white dark:bg-darkGray mt-[0.438rem]">
                <div className="flex items-center">
                    {
                        completed ? (
                            <svg onClick={()=> handleSetCompleted(id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0b8b36" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                        ) : (
                            <span onClick={()=> handleSetCompleted(id)}  className="border-solid border border-gray rounded-full p-2 cursor-pointer"></span>
                        )
                    }
                    <p className="text-strongGray dark:text-white ml-2 text-sm">{title}</p>
                </div>
                <svg onClick={()=> handleDelete(id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4169e1" className="w-6 h-6 cursor-pointer">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
             </div>
             <Divider className=" bg-lightGray dark:bg-gray  mt-2 "></Divider>

        </div>
       
    )
}

export default Todo;