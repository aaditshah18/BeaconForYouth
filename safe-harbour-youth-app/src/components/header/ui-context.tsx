import { createContext, useContext, useState, ReactNode } from "react";

type UIContextType = {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export const useUIContext = (): UIContextType => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUIContext must be used within a UIProvider");
  }
  return context;
};

type UIProviderProps = {
  children: ReactNode;
};

export const UIProvider = ({ children }: UIProviderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const value: UIContextType = {
    drawerOpen,
    setDrawerOpen,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
