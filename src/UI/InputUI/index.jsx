import style from "./style.module.css";

export default function InputUI({content, placeholder, type, name, validation }) {
    return <input 
            className={`${style.ui_input} ${style[content]}`} 
            placeholder={placeholder}
            type={type}
            name={name}
            {...validation}

            />;
}

