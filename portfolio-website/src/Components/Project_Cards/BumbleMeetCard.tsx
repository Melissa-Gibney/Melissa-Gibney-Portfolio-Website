import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

function BumbleMeetCard() {
    const title = "Bumble Meet"
    const imageRef = "project_images/bumble_meet/bumble_meet_thumbnail.svg"
    const link = "/projects/bumble-meet"
    const description = "A design for a new Bumble feature that allows users to connect in-person using location services.";
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={description} imagePadding={"0px"}>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
            <Tag name={"Figma"} color={"rgb(94, 166, 108)"}/>
        </ProjectCard>
    );
}

export default BumbleMeetCard;