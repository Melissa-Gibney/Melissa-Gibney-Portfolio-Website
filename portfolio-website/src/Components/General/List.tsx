import './List.css';
import { type ReactNode } from 'react';

interface ListProps {
    children: ReactNode[];
    title?: string;
}

const List: React.FC<ListProps> = ({ children, title }) => {
    
    return (
        <div className="List">
            <h2 className='ListTitle' style={{color:"white", marginBottom:"20px"}}>{title}</h2>
            <div className="ListContent">
                {children}
            </div>
        </div>
    );
}

export default List;