import ProjectCard from "../General/ProjectCard";
import Tag from "../General/Tag";

function PicoCTFCapstoneProjectCard() {
    const title = "picoCTF Captone Project";
    const imageRef = "project_images/picoctf_capstone_project/picoCTF_logo.png";
    const link = "/projects/picoctf-capstone-project";
    return (
        <ProjectCard title={title} imageRef={imageRef} link={link} description={""} imagePadding={"20px"}>
            <Tag name={"Research"} color={"rgb(94, 140, 166)"}/>
            <Tag name={"Design"} color={"rgb(94, 166, 108)"}/>
            <Tag name={"React"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Storybook"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Docker"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"Javascript"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"HTML"} color={"rgb(157, 120, 164)"}/>
            <Tag name={"CSS"} color={"rgb(157, 120, 164)"}/>
        </ProjectCard>
    );
}

export default PicoCTFCapstoneProjectCard;