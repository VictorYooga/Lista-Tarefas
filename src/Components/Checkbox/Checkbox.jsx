import { useState } from "react";
import EmptyIcon from "./emptylcon.svg";
import CheckedIcon from "./checkedlcon.svg";

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const onClickCheckbox = () => {
    setIsChecked(!isChecked);
    props.onCheck(!isChecked);
  };

  return (
    <img 
      className="icon"
      style={{ marginBottom: isChecked ? "3px" : "" }}
      src={isChecked ? CheckedIcon : EmptyIcon}
      onClick={onClickCheckbox}
      alt="Checkbox"
    />
  );
}

export default Checkbox;