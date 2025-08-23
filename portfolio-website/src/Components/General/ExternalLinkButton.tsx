import './ExternalLinkButton.css';
import { useState } from 'react';
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import type { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface ExternalLinkButtonProps {
    icon: IconDefinition;
    inverse: boolean;
    link: string;
    size: SizeProp;
}

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({ icon, inverse, link, size }) =>  {

    const [isHovering, setIsHovering] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovering(false);
        setIsActive(false);
    };

    const handleMouseDown = () => {
        setIsActive(true);
    };

    const handleMouseUp = () => {
        setIsActive(false);
    };

    const handleClick = () => {
        window.open(link);
    }

    return (
        <button className="LinkButton"
            onMouseDown={() => handleMouseDown()}
            onMouseUp={() => handleMouseUp()}    
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick()}>
            <div className='LinkButtonContents'>
                <FontAwesomeIcon icon={icon} size={size} inverse={inverse} transform={isActive ? "shrink-2" : isHovering ? "grow-1" : "grow-0"}/>
            </div>
        </button>
    );
}

export default ExternalLinkButton;