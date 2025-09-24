import { useState } from "react"
import Modal from "../General/Modal";

interface GDMSProps {}

const GDMSInternshipModal: React.FC<GDMSProps> = ({  }) => {
    let [isOpen, updateIsOpen] = useState(false);

    const imageRef = "work_experience_images/gdms/gdms_logo_text.svg";

    return (
        <>
            <button style={{width:"fit", height:"fit"}} onClick={() => updateIsOpen(true)}>
                <svg className='SVG'>
                    <image href={imageRef} style={{borderRadius: "10px"}} width="100%" height="100%" preserveAspectRatio='xMidYMid'/>
                </svg>
            </button>
            <Modal isOpen={isOpen} onClose={() => updateIsOpen(false)}>
                <div className="Section">
                    <p>
                        Hi this is a test!!!!
                    </p>
                </div>
            </Modal>
        </>
    );
};

export default GDMSInternshipModal;