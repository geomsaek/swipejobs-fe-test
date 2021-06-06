import * as React from 'react';
import { BgImg } from '../bgImg/bgImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import "./jobCard.scss";

interface IJobCardProps {
    img: {
        src: string
        title: string
    }
    title: string
    company: string
    id: string
};

export const JobCard: React.FC<IJobCardProps> = ({ img, title, company, id }) => {

    return <div className="job-card">
        <a href={`/jobs/jobId/${id}`}>
            <div className="job-card__img">
                <BgImg {...img} />
            </div>
            <h4 className="job-card__title">{title}</h4>
            <h5 className="job-card__company">{company}</h5>
            <div className="job-card__cta">
                <span>
                    View job
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </div>
        </a>
    </div>
}