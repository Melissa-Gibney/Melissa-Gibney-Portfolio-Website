import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

function BumbleMeetCard() {
    const title = "Bumble Meet"
    const imageRef = "project_images/bumble_meet/bumble_logo_white.svg"
    const link = "/projects/bumble-meet"
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={""} imagePadding={"40px"}>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
            <Tag name={"Figma"} color={"rgb(94, 166, 108)"}/>
        </ProjectCard>
    );
}

export default BumbleMeetCard;