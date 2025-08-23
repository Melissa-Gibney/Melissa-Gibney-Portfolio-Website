import './Tag.css';

interface TagProps {
    color: string;
    name: string;
}

const Tag: React.FC<TagProps> = ({ color, name }) => {
    return (
        <div className="Tag" style={{backgroundColor: color}}>
            <p style={{marginTop: "3px", marginBottom: "3px"}}>
                {name}
            </p>
        </div>
    );
}

export default Tag;