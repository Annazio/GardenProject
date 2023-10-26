import style from "./style.module.css";

export default function ButtonUI({ text, type, content, handleClick }) {
    return <button 
            className={`${style.ui_btn} ${style[content]}`} 
            type={type}
            onClick={handleClick}
            >{text}</button>;
}