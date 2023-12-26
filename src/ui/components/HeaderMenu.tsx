import { ThumbsUp, Menu as MenuIcon } from "lucide-react";
import { FC, ReactNode } from "react";
import { useAppContext } from "../contexts/AppContextProvider";
import { openTab } from "../utils";

const HeaderMenu = () => {
    const { openMenu } = useAppContext();
    return (
        <div className="flex flex-row content-end justify-end flex-grow gap-0">
            <HeaderMenuItem
                title="Feedback"
                action={() => openTab("https://chrome.google.com/webstore/detail/color-hunter/bpgkpfghcehfbffdfhelbooocbafaakd/reviews")}
            >
                <ThumbsUp size={16} />
            </HeaderMenuItem>
            <HeaderMenuItem title="Menu" action={openMenu}>
                <MenuIcon size={16} />
            </HeaderMenuItem>
        </div>
    );
};

const HeaderMenuItem: FC<{ children: ReactNode; title: string; action?: () => void }> = ({ children, title, action }) => {
    return (
        <button
            className="inline-flex items-center justify-center rounded w-9 h-9 hover:bg-orange-100 hover:text-orange-500"
            data-tooltip-id="app-tooltip"
            data-tooltip-content={title}
            onClick={action}
            title={title}
        >
            {children}
        </button>
    );
};

export default HeaderMenu;
