import type { ReactNode } from "react";

interface InfoCardProps {
    children: ReactNode | ReactNode[];
    title: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ children, title }) =>  {  
  return (
    <div className="Section" style={{paddingTop: "0px", flexDirection: "column", width: "200px", minHeight: "fit-content", height: "80px"}}>
        <p>{title}</p>
        <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%", minHeight: "fit-content", justifyContent: "center"}}>
            {children}
        </div>
    </div>
  );
}

export default InfoCard;