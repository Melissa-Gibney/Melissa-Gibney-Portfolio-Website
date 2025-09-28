import ReactDOM from "react-dom";
import "./Modal.css";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Example of a basic React modal component with TypeScript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

//This is the new modal
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ( ReactDOM.createPortal(
        <div className="Modal">
            <div className="ModalContents">
                <div className="ModalClose">
                    <button style={{backgroundColor: "transparent", border: "0px", color: "white", padding: "20px"}} onClick={onClose}>
                        <FontAwesomeIcon icon={faX} size={"2x"} inverse={false}/>
                    </button>
                </div>
                <div style={{paddingInline: "10%"}}>
                    {children}
                </div>
            </div>
        </div>, 
        document.body)
    );
};

export default Modal;
