import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

function BumbleMeetCard() {
    const title = "Bumble Meet"
    const imageRef = "project_images/character_creator/character_creator_thumbnail.svg"
    const link = "/projects/bumble-meet"
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={""} imagePadding={"0px"}>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
            <Tag name={"Figma"} color={"rgb(94, 166, 108)"}/>
        </ProjectCard>
    );
}

export default BumbleMeetCard;