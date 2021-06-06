import * as React from 'react';
import "./jobActionBtns.scss";
import { Button } from "../button/button";
import { actionJobById } from "../../store/actions";

export const JobActionBtns: React.FC<{ id: string }> = ({ id }) => {

    const [jobMessage, setJobMessage] = React.useState("");
    const [hasError, setErrorStatus] = React.useState(false);

    const actionJob = (acceptReject: boolean) => {
        
        actionJobById(id, acceptReject).then((response) => {
            
            let jobRequestMessage = response.message ? `${response.message}` : "Request submitted successfully";
            
            if(response.success) {
                setErrorStatus(false);
                setJobMessage(jobRequestMessage);
            }else {
                setErrorStatus(true);
                jobRequestMessage = response.errorCode ? `${jobRequestMessage} - ${response.errorCode}` : jobRequestMessage;
                setJobMessage(jobRequestMessage);
            }
        });

    }

    return <div className="job-action-btns">
        <div className="job-action-btns__col">
            <Button
                text="No Thanks"
                clickCallBack={() => { actionJob(false) }}
            />
        </div>
        <div className="job-action-btns__col">
            <Button
                text="I'll Take it"
                clickCallBack={() => { actionJob(true) }}
            />
        </div>
        {jobMessage ? <div className={"job-action-btns__message " + (hasError ? " error" : "")}>
            {jobMessage}
        </div> : null}
    </div>

}