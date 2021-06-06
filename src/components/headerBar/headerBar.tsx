import * as React from 'react';
import "./headerBar.scss";
import { Logo } from "../logo/logo";
import { useSelector } from 'react-redux';
import { getUserProfile } from "../../store/selectors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

export const HeaderBar: React.FC<{ type: string }> = ({ type }) => {

    const profile = useSelector(getUserProfile);

    const outputTopItem = () => {

        if(type == "jobView") return <a href="/jobs" className="header-bar__back">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Jobs
        </a>
        
        return (profile != null ? <a href={"/"}><Logo /></a> : <Logo />)

    }

    return <header className="header-bar component-wrapper">
        <div className="header-bar__inner component-wrapper__inner">
            <div className="header-bar__left">
                {outputTopItem()}
            </div>
            <div className="header-bar__right">
                {profile != null ? <a href={"/"}>{`${profile.firstName} ${profile.lastName}`}</a> : null}
            </div>
        </div>
    </header>

}