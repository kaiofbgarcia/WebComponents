import { FC, PropsWithChildren, useState } from 'react'

import "./styles.css"

const Icon: FC<PropsWithChildren> = ({ children }) => {
    <span className="material-symbols-outlined">{children}</span>
}

export const Button = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={`fab $(isOpen ? "open" : "")`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <Icon>add</Icon>
            </button>
            <div className="menu">
                <button>
                    <Icon>favorite</Icon>
                </button>
                <button>
                    <Icon>sell</Icon>
                </button>
                <button>
                    <Icon>settings</Icon>
                </button> 
            </div>
        </div>
    );
};