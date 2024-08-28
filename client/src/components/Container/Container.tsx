import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="container" style={{ padding: "0px 77px 0px 77px"}}>
      {children}
    </div>
  );
}

export default Container;
