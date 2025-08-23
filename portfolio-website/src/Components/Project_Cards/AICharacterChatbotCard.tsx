import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

interface AICharacterChatbotCardProps{

}

const AICharacterChatbotCard: React.FC<AICharacterChatbotCardProps> = () => {
    const title = "AI Character Chatbot"
    const imageRef = "project_images/character_creator/character_creator_thumbnail.svg"
    const link = "/projects/ai-character-chatbot"
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={""} imagePadding={"0px"}>
            <Tag name={"Python"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"LLM"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
        </ProjectCard>
    );
}

export default AICharacterChatbotCard;