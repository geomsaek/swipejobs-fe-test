import {
    ProfileState, ProfileActionType, SET_CURRENT_PROFILE,
    JobListActionType, SET_JOB_LIST
} from "./types";

export function setUserJobList(jobs: []): JobListActionType {
    return {
        type: SET_JOB_LIST,
        jobs: [...jobs]
    }
}

export function setUserProfile(profile: ProfileState): ProfileActionType {
    return {
        type: SET_CURRENT_PROFILE,
        ...profile
    }
}

export function fetchUserJobs(dispatch) {
    
    const endPoint = `${process.env.API_URL}/${process.env.USER_ID}/matches`;

    return (
        fetch(endPoint)
        .then((response) => {
            if(response.status !== 200) return;
            response.json().then((data) => {
                dispatch(setUserJobList(data));
            })
        })
    )

}

export function fetchUserProfile(dispatch) {

    const endPoint = `${process.env.API_URL}/${process.env.USER_ID}/profile`;

    return (
        fetch(endPoint)
        .then((response) => {
            if(response.status !== 200) return;
            response.json().then((data) => {
                dispatch(setUserProfile(data));
            })
        })
    )
}


export function actionJobById(jobId: string, acceptReject: boolean) {

    const status = acceptReject ? 'accept' : 'reject';
    const endPoint = `${process.env.API_URL}/${process.env.USER_ID}/job/${jobId}/${status}`;
    
    return new Promise((resolve, reject) => {
        fetch(endPoint)
        .then((response) => {
            if(response.status !== 200) reject();
            response.json().then((data) => {
                resolve(data);
            })
        })
    })


}
