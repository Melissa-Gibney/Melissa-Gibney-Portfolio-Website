import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

function FluteSynthesizerCard() {
    const title = "Flute Synthesizer";
    const imageRef = "project_images/character_creator/character_creator_thumbnail.svg";
    const link = "/projects/flute-synthesizer";
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={""} imagePadding={"0px"}>
            <Tag name={"MaxMSP"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
        </ProjectCard>
    );
}

export default FluteSynthesizerCard;