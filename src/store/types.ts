// general interfaces

interface Address {
    formattedAddress: string
    zoneId: string
};

export interface Contact {
    name: string
    phone: string
};

interface Job {
    jobId: string
    jobTitle: {
        name: string
        imageUrl: string
    }
    company: {
        name: string
        address: Address
    }
    reportTo: {
        name: string
        phone: string
    }
    wagePerHourInCents: string
    milesToTravel: string
    shifts: Shift[]
    branch: string
    branchPhoneNumber: string
};

export interface Location {
    address: string
    distance: string
}

export interface Shift {
    startDate: string
    endDate: string
};


// interface states
export interface JobListState {
    jobs: Job[]
};

export interface ProfileState {
    address: Address
    email: string
    firstName: string
    lastName: string
    maxJobDistance: string
    phoneNumber: string
    workerId: string
};


// actions & action types

export const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
export const SET_JOB_LIST = "JOB_LIST";

interface SetCurrentProfileAction {
    type: typeof SET_CURRENT_PROFILE,
    address: Address
    email: string
    firstName: string
    lastName: string
    maxJobDistance: string
    phoneNumber: string
    workerId: string
};

interface SetJobListAction {
    type: typeof SET_JOB_LIST,
    jobs: Job[]
}

export type ProfileActionType = SetCurrentProfileAction;
export type JobListActionType = SetJobListAction;