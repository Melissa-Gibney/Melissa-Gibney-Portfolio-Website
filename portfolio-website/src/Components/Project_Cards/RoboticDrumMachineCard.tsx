import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

function RoboticDrumMachineCard() {
    const title = "Robotic Drum Machine"
    const imageRef = "project_images/character_creator/character_creator_thumbnail.svg"
    const link = "/projects/robotic-drum-machine"
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={""} imagePadding={"0px"}>
            <Tag name={"Microcontrollers"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"CAD"} color={"rgb(94, 166, 108)"}/>
            <Tag name={"Research"} color={"rgb(94, 140, 166)"}/>
        </ProjectCard>
    );
}

export default RoboticDrumMachineCard;