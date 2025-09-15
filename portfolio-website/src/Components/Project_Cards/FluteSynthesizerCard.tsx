import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

function FluteSynthesizerCard() {
    const title = "Flute Synthesizer";
    const imageRef = "project_images/flute_synthesizer/synthesizer_thumbnail.png";
    const link = "/projects/flute-synthesizer";
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={""} imagePadding={"10px"}>
            <Tag name={"MaxMSP"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
        </ProjectCard>
    );
}

export default FluteSynthesizerCard;