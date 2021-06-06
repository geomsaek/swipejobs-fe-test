import { RootState } from './reducers';

export const getUserProfile = (store: RootState) => store.profile;
export const getJobList = (store: RootState) => store.jobs;