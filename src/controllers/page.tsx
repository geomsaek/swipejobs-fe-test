import * as React from 'react';
import { controllers } from "./controller-list";
import { Head } from "./head";
import { HeaderBar } from "../components/headerBar/headerBar";
import { useDispatch, useSelector } from 'react-redux';
import { getJobList, getUserProfile } from "../store/selectors";
import { fetchUserJobs, fetchUserProfile } from "../store/actions";

/*
    Use this layer to initialise the data for the store and before the application loads.
    This allows us to add global elements more easily and focus on
    switching out the content for each controller via the controller map easily.
*/

export const Page = (props) => {

    const dispatch = useDispatch();
    const myJobs = useSelector(getJobList);
    const profile = useSelector(getUserProfile);
    const ControllerView = controllers[props.type];

    React.useEffect(() => {
        if(myJobs == null) fetchUserJobs(dispatch);
        if(profile == null) fetchUserProfile(dispatch);
    }, []);

    if(myJobs == null || profile == null) return <React.Fragment></React.Fragment>
    return <React.Fragment>
        <Head type={props.type} />
        <HeaderBar type={props.type} />
        <ControllerView {...props} />
    </React.Fragment>

}