import style from "./style.module.css";

export default function ButtonUI({ text, type }) {
    return <button className={`${style.ui_btn} ${style[type]}`}>{text}</button>;
}