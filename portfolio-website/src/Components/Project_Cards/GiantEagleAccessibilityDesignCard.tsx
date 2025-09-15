import Card from "../General/ProjectCard";
import Tag from "../General/Tag";

function GiantEagleAccessibilityDesignCard() {
    const title = "Grocery Store Accessibility Design";
    const imageRef = "project_images/giant_eagle_accessibility_design/thumbnail.png";
    const link = "/projects/giant-eagle-accessibility-design";
    return (
        <Card title={title} imageRef={imageRef} link={link} description={""} imagePadding={"10px"}>
            <Tag name={"Research"} color={"rgb(94, 140, 166)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
        </Card>
    );
}

export default GiantEagleAccessibilityDesignCard;