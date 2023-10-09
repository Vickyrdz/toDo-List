import { useState } from "react";

const Input = ({addTodo}) => {

    const [title, setTitle ] = useState(""); 

    const changeTitle = (e) => setTitle(e.target.value); 

    const handle = (e) => {
        if(e.key.toLowerCase()==="enter"){
            addTodo(title)
            setTitle("")
        }
    }

    return (
        <div className="flex self-center">
            <input 
                className="text-center mt-2 border-[0.063rem] border-gray text-gray rounded-3xl text-sm p-[0.125]" 
                type="text" 
                placeholder="Insert some task..." 
                value={title}
                onChange={changeTitle}
                onKeyDown={e => handle(e)}
            />
        </div>
    )
}

export default Input; 