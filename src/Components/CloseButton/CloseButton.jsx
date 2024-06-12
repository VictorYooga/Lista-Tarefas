
import CloseIcon from "./closelcon.svg"


function CloseButton(props) {
    return (
        <img onClick={props.onClick} id="close-button" className="icon" src={CloseIcon} alt="" />
    )
}

export default CloseButton;
