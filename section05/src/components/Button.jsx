import { upperCase } from "lodash";
import { Children } from "react";

function Button({ children, text, color = "black" }) {
    function onClickButton(e) {
        console.log(e);
        console.log(text);
    }
    return (
        <button
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style={{ color: color }}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
}

export default Button;
