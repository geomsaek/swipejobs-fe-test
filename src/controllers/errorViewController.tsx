import * as React from 'react';

interface IErrorViewControllerProps {
    title: string;
};

// error page to display to the user
export const ErrorViewController: React.FC<IErrorViewControllerProps> = ({ title }) => {

    return <div className="component-wrapper component-wrapper--bg-grey">
        <div className="component-wrapper__inner">
            <div className="component-wrapper__content">
                <h1>{title}</h1>
            </div>
        </div>
    </div>

}