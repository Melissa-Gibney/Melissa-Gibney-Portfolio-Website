import ReactDOM from "react-dom";
import "./Modal.css";

// Example of a basic React modal component with TypeScript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ( ReactDOM.createPortal(
        <div className="Modal">
            <div className="ModalContents">
                <div style={{alignItems: "end"}}>
                    <button style={{backgroundColor: "transparent", border: "0px", color: "white"}} onClick={onClose}>
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>, 
        document.body)
    );
};

export default Modal;