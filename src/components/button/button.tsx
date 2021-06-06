import * as React from 'react';

interface IButtonProps {
    text: string
    clickCallBack: () => void
};

export const Button: React.FC<IButtonProps> = ({ text, clickCallBack }) => {
    return <button
        className="btn"
        role="button"
        onClick={() => { clickCallBack() }}
    >
        {text}
    </button>

}