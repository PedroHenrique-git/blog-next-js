/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useState } from 'react';

interface DrawerContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DEFAULT_CONTEXT_VALUES = {
  isOpen: false,
  setIsOpen: () => false,
};

const DrawerContext = createContext<DrawerContextType>(DEFAULT_CONTEXT_VALUES);

export { DrawerContext };

export default function DrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <DrawerContext.Provider
      value={{
        isOpen: open,
        setIsOpen: setOpen,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
