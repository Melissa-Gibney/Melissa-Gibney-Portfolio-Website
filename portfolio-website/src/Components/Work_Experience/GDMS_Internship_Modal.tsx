import { useState } from "react"
import Modal from "../General/Modal";

interface GDMSProps {}

const GDMSInternshipModal: React.FC<GDMSProps> = ({  }) => {
    let [isOpen, updateIsOpen] = useState(false);

    const imageRef = "work_experience_images/gdms/gdms_logo_text.svg";

    return (
        <>
            <button style={{width:"fit", height:"fit", borderRadius: "10px"}} onClick={() => updateIsOpen(true)}>
                <svg className='SVG'>
                    <image href={imageRef} style={{borderRadius: "10px"}} width="100%" height="100%" preserveAspectRatio='xMidYMid'/>
                </svg>
            </button>
            <Modal isOpen={isOpen} onClose={() => updateIsOpen(false)}>
                <p>
                    My position as an intern focused on implementing changes to the Agent Starling platform.
                    Agent Starling is an internal platform used to test the communication of the 
                    <a href="https://gdmissionsystems.com/products/encryption/encryptor-management/gem-one-encryptor-manager"> GEM One</a> product by emulating many devices.
                    The internship began with the task of installing and setting up Agent Starling to a Tomcat virtual machine and providing documentation on that setup.
                    This virtual machine setup allows anyone on the GEM One team to access the platform from their own desktop, allowing for less strain on the team's own machines.
                    After that was completed, I then worked on sending data between the user's desktop and the Agent Starling platform using HTTP requests.
                    By the end of the internship, Agent Starling could emulate as many as 2000 devices while running on a virtual machine, allowing for a more effective workflow within the GEM One team.
                </p>
            </Modal>
        </>
    );
};

export default GDMSInternshipModal;