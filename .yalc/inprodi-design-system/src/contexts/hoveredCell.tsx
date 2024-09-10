import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HoverContextValue {
  hoveredId: number | null;
  setHoveredId: React.Dispatch<React.SetStateAction<number | null>>;
}

const HoverContext = createContext<HoverContextValue>({
  hoveredId: null,
  setHoveredId: () => {},
});

export const HoverProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <HoverContext.Provider
      value={{
        hoveredId,
        setHoveredId,
      }}
    >
      {children}
    </HoverContext.Provider>
  );
};

export const useHover = () => useContext(HoverContext);