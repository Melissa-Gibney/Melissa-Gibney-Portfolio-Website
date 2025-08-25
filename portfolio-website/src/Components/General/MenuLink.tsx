import { useNavigate } from 'react-router-dom';
import './MenuLink.css';
import { useState } from 'react';

interface MenuLinkProps {
    link: string;
    shadowColor: string;
    title: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ link, shadowColor, title }) => {

    const navigate = useNavigate();

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
        navigate(link);
    }

    return (
        <button className="MenuLink" style={{boxShadow: isActive ? ("0px 2px 3px 2px " + shadowColor) : isHovering ? ("0px 2px 6px 4px " + shadowColor) : ("0px 2px 3px 3px " + shadowColor), cursor: isActive || isHovering ? "pointer" : "default"}}
            onMouseDown={() => handleMouseDown()}
            onMouseUp={() => handleMouseUp()}    
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick()}>
            <div className='MenuLinkContents'>
                <h1>
                    {title}
                </h1>
            </div>
        </button>
    );
}

export default MenuLink;