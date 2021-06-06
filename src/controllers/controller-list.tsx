import { JobViewController } from "./jobViewController";
import { JobListViewController } from "./jobListViewController";
import { ProfileViewController } from "./profileViewController/profileViewController";

/*
    Build a list of the available controllers.
    This will allow us to easily map to them via the value passed in
    from the current path/route
*/

export const controllers = {
    jobList: JobListViewController,
    jobView: JobViewController,
    profile : ProfileViewController
};
