import React from "react";
import { cn } from "../helpers/cn";

type TAppContainer = {
  children: React.ReactNode;
  className?: string;
};

const AppContainer = (props: TAppContainer) => {
  const { className, children } = props;

  return (
    <div className={cn("mx-auto w-full max-w-7xl", className && className)}>
      {children}
    </div>
  );
};

export default AppContainer;
