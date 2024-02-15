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
                    ? <Modal
                        id={"custom-id"}
                        header={<h1>Customized Header</h1>}
                        footer={<h1>Customized Footer</h1>}
                        onClose={onClose}
                        body={<div>Customized Modal Body</div>}/>
                    : null
            }
        </div>
    )
}

export default ModalTest;
