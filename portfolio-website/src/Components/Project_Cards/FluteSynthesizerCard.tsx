import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";
import thumbnail from "../../assets/project_images/flute_synthesizer/flute_synthesizer_thumbnail.svg";

const FluteSynthesizerCard: React.FC<{}> = () => {
    const title = "Flute Synthesizer";
    const link = "/projects/flute-synthesizer";
    const description = "A flute synthesizer coded based upon research by Perry R. Cook.";
    return (
        <ProjectCard title={title} imageRef={thumbnail} link={link} description={description} imagePadding={"10px"}>
            <Tag name={"Max/MSP"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
        </ProjectCard>
    );
}

export default FluteSynthesizerCard;