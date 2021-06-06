import * as React from 'react';
import { JobCard } from "../components/jobCard/jobCard";
import { useSelector } from 'react-redux';
import { getJobList } from "../store/selectors";

// displays the matched set of jobs for the user
export const JobListViewController: React.FC = () => {

    const myJobs = useSelector(getJobList);
    
    const outputJobList = () => {
        return <React.Fragment>
            
            <h1>Your matched jobs - {myJobs.jobs.length}</h1>
            
            {myJobs.jobs.map((item, index) => {
                const { jobTitle, company, jobId } = item;
                return <div className="component-wrapper__col" key={index}>
                    <JobCard 
                        img={{
                            src: jobTitle.imageUrl,
                            title: jobTitle.name
                        }}
                        title={jobTitle.name}
                        company={company.name}
                        id={jobId}
                    />
                </div>
            })}
        </React.Fragment>
    }

    return <div className="component-wrapper component-wrapper--listing component-wrapper--bg-grey">
        <div className="component-wrapper__inner">
            <div className="component-wrapper__content">
                {myJobs == null ? "Loading..." : outputJobList()}
            </div>
        </div>
    </div>

}