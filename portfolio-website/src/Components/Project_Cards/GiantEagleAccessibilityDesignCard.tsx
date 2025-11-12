import Card from "../General/ProjectCard";
import Tag from "../General/Tag";

const GiantEagleAccessibilityDesignCard: React.FC<{}> = () => {
    const title = "Grocery Store Accessibility Design";
    const imageRef = "project_images/giant_eagle_accessibility_design/thumbnail.svg";
    const link = "/projects/giant-eagle-accessibility-design";
    const description = "A design using AR to assist users with navigating through their shopping experience.";
    return (
        <Card title={title} imageRef={imageRef} link={link} description={description} imagePadding={"10px"}>
            <Tag name={"Research"} color={"rgb(94, 140, 166)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
            <Tag name={"Figma"} color={"rgb(94, 166, 108)"}/>
        </Card>
    );
}

export default GiantEagleAccessibilityDesignCard;