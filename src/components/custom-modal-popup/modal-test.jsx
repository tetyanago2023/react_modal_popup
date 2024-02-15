import {useState} from "react";
import Modal from "./modal";
import "./modal.css";

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    const handleToggleModalPopup = () => {
        setShowModalPopup(!showModalPopup);
    }
    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>
                Open Modal Popup
            </button>
            {
                showModalPopup
                    ? <Modal onClose={onClose} body={<div>Customized Modal Body</div>}/>
                    : null
            }
        </div>
    )
}

export default ModalTest;