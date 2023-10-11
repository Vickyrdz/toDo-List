import { useState } from "react";
import { useTranslation } from "react-i18next";

const Input = ({addTodo}) => {

    const [title, setTitle ] = useState(""); 

    const changeTitle = (e) => setTitle(e.target.value); 

    const handle = (e) => {
        if(e.key.toLowerCase()==="enter"){
            addTodo(title)
            setTitle("")
        }
    }

    const { t } = useTranslation(["input"]);
 
    return (
        <div className="flex self-center">
            <input 
                className="text-center mt-2 border-[0.063rem] border-gray text-gray rounded-3xl text-sm p-[0.125] lg:p-1 lg:mt-4" 
                type="text" 
                placeholder={t("input")}
                value={title}
                onChange={changeTitle}
                onKeyDown={e => handle(e)}
            />
        </div>
    )
}

export default Input; 