import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

const RoboticDrumMachineCard: React.FC<{}> = () => {
    const title = "Robotic Drum Machine"
    const imageRef = "project_images/robotic_drum_machine/Senior-Design-Enclosure.jpg"
    const link = "/projects/robotic-drum-machine"
    const description = "A drum machine built using an Arduino Mega, solenoids, and 3D modeling.";
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={description} imagePadding={"0px"}>
            <Tag name={"Microcontrollers"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"CAD"} color={"rgb(94, 166, 108)"}/>
            <Tag name={"Research"} color={"rgb(94, 140, 166)"}/>
        </ProjectCard>
    );
}

export default RoboticDrumMachineCard;