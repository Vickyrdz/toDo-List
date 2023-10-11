import { useTranslation } from "react-i18next"; 


const Title = () => {

    const { t } = useTranslation(["title"]);

    return (
        <div className="flex self-center gap-2 items-center -mt-5">
            <p className="text-xl font-bold text-white p-2 bg-mediumBlue rounded-[2.5rem]">{t("title")}</p>
        </div>
    )
}

export default Title; 