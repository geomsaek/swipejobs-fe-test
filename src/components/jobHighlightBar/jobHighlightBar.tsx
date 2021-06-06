import * as React from 'react';
import "./jobHighlightBar.scss";

interface IJobHighlightProps {
    columns: {
        title: string
        value: string
    }[]
}

export const JobHighlightBar: React.FC<IJobHighlightProps> = ({ columns }) => {

    return <div className="job-highlight-bar">
        {columns.map((item, index) => {
            if(index < 2) {
                return <div className="job-highlight-bar__col" key={index}>
                    <div className="job-highlight-bar__sub-title">{item.title}</div>
                    <div className="job-highlight-bar__value" dangerouslySetInnerHTML={{ __html: item.value }}></div>
                </div>
            }
        })}
    </div>

}