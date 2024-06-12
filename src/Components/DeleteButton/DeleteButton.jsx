
import DeleteIcon from "./deletelcon.svg";

function DeleteButton(props) {
  return (
    <img className="icon" src={DeleteIcon} onClick={props.onClick} alt="" />
  );
}

export default DeleteButton;
