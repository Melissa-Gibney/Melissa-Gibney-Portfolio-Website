import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";
import thumbnail from "../../assets/project_images/character_creator/character_creator_thumbnail.svg";

const CharacterCreatorCard: React.FC<{}> = () => {
    const title = "Character Creator";
    const link = "/projects/character-creator";
    const description = "A web application that allows users to customize a character and export them as an image.";
    return (
        <ProjectCard title={title} imageRef={thumbnail} link={link} description={description} imagePadding={"0px"}>
            <Tag name={"React"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Javascript"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"HTML"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"CSS"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
        </ProjectCard>
    );
}

export default CharacterCreatorCard;