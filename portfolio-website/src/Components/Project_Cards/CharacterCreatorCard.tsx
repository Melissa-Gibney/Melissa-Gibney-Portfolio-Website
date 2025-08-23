import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

function CharacterCreatorCard() {
    const title = "Character Creator";
    const imageRef = "project_images/character_creator/character_creator_thumbnail.svg";
    const link = "/projects/character-creator";
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={""} imagePadding={"0px"}>
            <Tag name={"React"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Javascript"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"HTML"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"CSS"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
        </ProjectCard>
    );
}

export default CharacterCreatorCard;