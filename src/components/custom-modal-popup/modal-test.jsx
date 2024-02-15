import {useState} from "react";
import Modal from "./modal";


const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    const handleToggleModalPopup = () => {
        setShowModalPopup(!showModalPopup);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>
                Open Modal Popup
            </button>
            {
                showModalPopup
                    ? <Modal />
                    : null
            }
        </div>
    )
}

export default ModalTest;