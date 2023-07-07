import { FC, ReactNode, createContext, useContext, useState } from "react";

interface AppContext {
    openMenu: () => void;
    closeMenu: () => void;
    isMenuOpen: boolean;
}

const AppContext = createContext<AppContext>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    openMenu: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    closeMenu: () => {},
    isMenuOpen: false,
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return <AppContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
