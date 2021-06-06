import { JobRowTypes } from "../components/jobRows/jobRows";

// utility functions

export const convertToDollarValue = (value: string): number => {
    if(!value) return 0;
    return parseInt(value) / 100;
}

export const convertToRoundedDistance = (value: string) => {
    
    if(!value) return 0;
    const distanceAsNumber = parseFloat(value);
    const roundedValue = distanceAsNumber.toFixed(1);
    return roundedValue

}

export const convertToUSTimeZone = (dateString: string, options: any) => {

    let dateFromString = new Date(dateString);
    let formattedDate = dateFromString.toLocaleString('en-US', options);
    return formattedDate;

}


export const formatDataToRows = (job: any) => {

    if(!job) return null;
    let data = {
        rows: []
    };

    data.rows.push({
        type: JobRowTypes.SHIFTS,
        title: "Shift Dates",
        content: {
            shifts: job.shifts,
            zoneId: job.company.address.zoneId
        }
    })

    data.rows.push({
        type: JobRowTypes.LOCATION,
        title: "Location",
        content: {
            address: job.company.address.formattedAddress,
            distance: `${convertToRoundedDistance(job.milesToTravel)} miles from your job search location`
        }
    });

    data.rows.push({
        type: JobRowTypes.REQUIREMENTS,
        title: "Requirements",
        content: job.requirements
    });

    data.rows.push({
        type: JobRowTypes.CONTACT,
        title: "Report To",
        content: job.company.reportTo
    });

    return data;

}


export const getCurrentJobFromId = (location: string, jobs: any) => {

    const urlChunks = location.split('/');
    const id = urlChunks[urlChunks.length - 1];
    const currentJob = jobs.filter(job => job.jobId == id);

    return currentJob;

}