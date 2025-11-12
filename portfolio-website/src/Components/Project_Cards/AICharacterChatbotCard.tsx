import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

interface AICharacterChatbotCardProps {
    imageRef: string;
}

const AICharacterChatbotCard: React.FC<AICharacterChatbotCardProps> = ({ imageRef }) => {
    const title = "AI Character Chatbot";
    // const imageRef = "project_images/ai_character_chatbot/ai_character_chatbot_thumbnail.svg";
    const link = "/projects/ai-character-chatbot";
    const description = "A chatbot that sends its responses to users in Discord using an LLM.";
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={description} imagePadding={"0px"}>
            <Tag name={"Python"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"LLM"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
        </ProjectCard>
    );
}

export default AICharacterChatbotCard;