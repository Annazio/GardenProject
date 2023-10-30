import style from "./style.module.css";

export default function ButtonUI({ text, type, content, onClick }) {
    return <button 
            className={`${style.ui_btn} ${style[content]}`} 
            type={type}
            onClick={() => onClick()}
            >{text}</button>;
}

