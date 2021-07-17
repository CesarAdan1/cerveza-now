import React, {useState} from "react";
import '../styles/btn.css';

const ButtonChange = ({onClick, color, letters, title, margin}) => {
    const [margLeft, setMarginL] = useState(true)
    const [btnStypes, setButtonStyles] = useState({
        backgroundColor: '',
        color: '',
    })

    return(
        <div className={`container-btn ${color} ${letters} ${margin}`} onClick={onClick}>
            <button className={`${color}`}>{title}</button>
        </div>
    )
}

export default ButtonChange;