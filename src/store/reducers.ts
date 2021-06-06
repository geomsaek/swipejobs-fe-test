import {
    ProfileState, ProfileActionType, SET_CURRENT_PROFILE,
    JobListState, JobListActionType, SET_JOB_LIST
} from "./types";
import { combineReducers } from 'redux';

const initialProfileState: ProfileState = {
    address: null,
    email: "",
    firstName: "",
    lastName: "",
    maxJobDistance: "",
    phoneNumber: "",
    workerId: ""
};

const initialJobListState: JobListState = {
    jobs: []
};

export function profileReducer(state = initialProfileState, action: ProfileActionType): ProfileState {

    switch(action.type) {
        case SET_CURRENT_PROFILE:
            return {
                ...state,
                address: action.address,
                email: action.email,
                firstName: action.firstName,
                lastName: action.lastName,
                maxJobDistance: action.maxJobDistance,
                phoneNumber: action.phoneNumber,
                workerId: action.workerId
            }
        
        default: 
            return state;
    }

}

export function jobReducer(state = initialJobListState, action: JobListActionType): JobListState {

    switch(action.type) {
        case SET_JOB_LIST:
            return {
                ...state,
                jobs: [...action.jobs]
            }

        default:
            return state;
    }

}

export const rootReducer = combineReducers({
    profile: profileReducer,
    jobs: jobReducer
});

export type RootState = ReturnType<typeof rootReducer>;