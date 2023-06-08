import React, {createContext, useState} from 'react';

export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
  const[isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <SidebarContext.Provider value={{isOpen, handleClose, setIsOpen}}>{children}</SidebarContext.Provider>
};

export default SidebarProvider;
