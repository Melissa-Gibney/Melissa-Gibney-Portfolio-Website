import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';
import { useState, useRef, type ReactElement } from 'react';

export interface ProjectCardProps {
    children: ReactElement[];
    description: string;
    imageRef: string;
    imagePadding: string;
    link: string;
    title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ children, description, imageRef, imagePadding, link, title }) => {
  
    const navigate = useNavigate();

    const card = useRef<HTMLDivElement | null>(null);
    // const highlight = useRef<HTMLDivElement | null>(null);

    var [isHovering, setIsHovering] = useState(false)

    const handleClick = () => {
        navigate(link);
    }

    const setHover = (x: boolean) => {
        setIsHovering(x);
        // If the pointer left the card, smoothly reset rotation back to neutral
        if (!x) {
            if (!card.current) { return }
            card.current.style.transition = "transform 300ms ease";
            card.current.style.transform = "rotateX(0deg) rotateY(0deg)";
            // remove transition after animation finishes so mousemove responses are immediate
            setTimeout(() => {
                if (card.current) card.current.style.transition = "";
            }, 300);
        } else {
            // entering: ensure no lingering transition slows immediate movement
            if (card.current) card.current.style.transition = "";
        }
    }

    const handleMouseMoveCard = (event: { clientX: number; clientY: number; }) => {
        if (isHovering) {
            if (!card.current) { return }
            const rect = card.current.getBoundingClientRect();
            const mouseX = event.clientX - rect.left - rect.width / 2;
            const mouseY = event.clientY - rect.top - rect.height / 2;

            const rotateX = (mouseY / rect.height) * 40;
            const rotateY = (mouseX / rect.width) * 40;

            // remove transition while moving so rotation follows cursor instantly
            card.current.style.transition = "";
            card.current.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg)`;
            card.current.style.top = "" + mouseY;
            card.current.style.left = "" + mouseX;
        } else {
            // fallback: ensure card returns to neutral if this is called while not hovering
            if (!card.current) { return }
            card.current.style.transition = "transform 300ms ease";
            card.current.style.transform = "rotateX(0deg) rotateY(0deg)";
            setTimeout(() => {
                if (card.current) card.current.style.transition = "";
            }, 300);
        }
    }

    // const handleMouseMoveHighlight = (event: { clientX: number; clientY: number; }) => {
    //     if(isHovering)
    //     {
    //         if(!card.current || !highlight.current){return}
    //         const rect = card.current.getBoundingClientRect();
    //         const mouseX = event.clientX - rect.left - rect.width/2;
    //         const mouseY = event.clientY - rect.top - rect.height/2;

    //         highlight.current.style.top = "" + mouseY;
    //         highlight.current.style.left = "" + mouseX;
    //     }
    // }

    // const calcWidth = (w: number) => {
    //     return w - imagePadding;
    // }

    return (
        <button className='CardContainer' onClick={() => handleClick()}>
            {/* <div className='CardHighlight'/> */}
            <div className="Card" ref={card} onMouseMove={handleMouseMoveCard} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {/* <div className='CardShadow'/> */}
                <div className='CardContent'>
                    {/* <div className='CardHighlight' ref={highlight}/> */}
                    <svg className='SVG' style={{paddingTop: imagePadding, paddingBottom: imagePadding}}>
                        <image href={imageRef} style={{borderRadius: "10px"}} width="100%" height="100%" preserveAspectRatio='xMidYMid'/>
                    </svg>
                    <div className='TextContainer'>
                        <h2 style={{margin: "0px", marginBottom: "10px"}}>{title}</h2>
                        <div className='TagContainer'>
                            {children}
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default ProjectCard;