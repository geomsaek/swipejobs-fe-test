import * as React from 'react';
import "./bgImg.scss";

interface IBgImgProps {
    src: string
    title: string
};

export const BgImg: React.FC<IBgImgProps> = ({ src, title }) => {

    return <div className="bg-img" style={{ backgroundImage: `url(${src})`}}>
        <span className="sr-only">{title}</span>
    </div>

}