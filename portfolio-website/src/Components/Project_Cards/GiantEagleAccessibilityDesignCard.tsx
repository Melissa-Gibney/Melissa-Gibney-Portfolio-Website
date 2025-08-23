import Card from "../General/ProjectCard";
import Tag from "../General/Tag";

function GiantEagleAccessibilityDesignCard() {
    const title = "Giant Eagle Accessibility Design";
    const imageRef = "project_images/character_creator/character_creator_thumbnail.svg";
    const link = "/projects/giant-eagle-accessibility-design";
    return (
        <Card title={title} imageRef={imageRef} link={link} description={""} imagePadding={"0px"}>
            <Tag name={"Research"} color={"rgb(94, 140, 166)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
        </Card>
    );
}

export default GiantEagleAccessibilityDesignCard;