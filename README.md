## Getting started
* Open terminal in project directory and run ```npm install```.
* Once installation completes run ```npm run start```.
* Application will open URL ```http://localhost:1234/``` - initial build will take a little longer due to local asset copy.
* Available routes are:
    * ```/```, root location, displays profile information
    * ```/jobs```, displays matched jobs
    * ```/jobs/:id```, displays a specific job

## Under the hood
* React
* React Helmet
* React Router
* React Redux
* Parcel JS (compiler)
* SASS (styles)
* Font awesome icons

## Notes on build
* Although the provided screen shows a single ```job view```, the available API endpoints suggest a page like this exists amongst a wider tree. As such I've built a simple example to demonstrate how I thought this would work.
* Not all typographic global styles exist. Only those that were used are styled.
* Basic grid layout is custom. This was a contextual choice and to reduce library overhead. 
* Simple messages have been added to the ```Accept & Reject``` job buttons.

## Features
* Screens have been optimised to work in mobile & tablet devices.
* For the purposes of simplicity, routes have been set to: Profile, Job List, Job View. All other URLs will show an error page.
* Browser compatiblity extends to the following browsers: Google Chrome, Firefox.
* WCAG 2.0 AA standards have been applied to markup where applicable.
* Modules are built with a ```mobile first``` approach.

## Assumptions
* User has already been verified, successfully logged in and allocated their "worker ID".
* Current screens that are required are only: Profile, Job List and Job View.
* All validation of data request and handling has already been done.
* Data updated in the store is sent to an external/persistent source (on application close or on update).
* All listed jobs provided by ```https://test.swipejobs.com/api/worker/​{workerId}​/matches```, are active and have already been filtered to match the current user.
* Featured times are set to PDT.

## Future Considerations
* Lazy loading for images.
* Animations for module interactivity.
* Better suited desktop layouts.
* Greater device/browser testing.
