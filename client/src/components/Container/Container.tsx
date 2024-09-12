import { ReactNode } from "react";
import "./Container.scss"

interface ContainerProps {
    children: ReactNode;
}

function Container({ children }: ContainerProps) {
    return (
        <div className="container">
            {children}
        </div>
    );
}

export default Container;
