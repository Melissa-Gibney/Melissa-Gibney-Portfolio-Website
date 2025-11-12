import { useState } from "react"
import Modal from "../General/Modal";

const CylabExternshipModal: React.FC<{}> = () => {
    let [isOpen, updateIsOpen] = useState(false);

    const imageRef = "./work_experience_images/cylab_extern/cylab-logo.svg";

    return (
        <>
            <button style={{width:"fit", height:"fit", borderRadius: "10px"}} onClick={() => updateIsOpen(true)}>
                <svg className='SVG'>
                    <image href={imageRef} style={{borderRadius: "10px"}} width="100%" height="100%" preserveAspectRatio='xMidYMid'/>
                </svg>
            </button>
            <Modal isOpen={isOpen} onClose={() => updateIsOpen(false)}>
                <p>
                    My current position as an extern for CyLab involves working with the picoCTF team to implement a redesign of their website.
                    This position is an extension of my MHCI team's capstone project, where I will be taking the code and designs from the project and refining them so that they are ready to be deployed onto the picoCTF website.
                    I have adapted to the picoCTF team's development environment—using GitHub to share the frontend repository and Docker to ensure that the code us easily accessible by other members of the team.
                    In the future I may also be using GitHub Actions, as that is a part of the team's CI/CD workflow.
                </p>
            </Modal>
        </>
    );
};

export default CylabExternshipModal;
