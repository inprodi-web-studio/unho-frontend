import React, { ReactNode } from 'react';
interface HoverContextValue {
    hoveredId: number | null;
    setHoveredId: React.Dispatch<React.SetStateAction<number | null>>;
}
export declare const HoverProvider: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
export declare const useHover: () => HoverContextValue;
export {};
