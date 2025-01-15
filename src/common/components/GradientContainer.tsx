/* eslint-disable react/display-name */
import React, { memo, type ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};
export const GradientContainer = memo(({ children, className }: Props) => {
  return (
    <div
      className={`flex-1 shadow-2xl relative p-[3px] bg-gradient-to-b from-accent to-accent-light rounded-lg`}
    >
      <div className={`bg-white rounded-lg p-6 ${className}`}>{children}</div>
    </div>
  );
});
