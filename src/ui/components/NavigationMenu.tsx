import { FC, Fragment } from "react";
import { useAppContext } from "../contexts/AppContextProvider";
import { Dialog, Transition } from "@headlessui/react";
import { Github, LucideIcon, MessageSquare, Star } from "lucide-react";
import { openTab } from "../utils";
import { User2 } from "lucide-react";

const NavigationMenu = () => {
    const { isMenuOpen, closeMenu } = useAppContext();
    return (
        <Transition appear show={isMenuOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeMenu}>
                <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transform transition ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out sm:duration-700"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="w-[80%] max-w-md p-2 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-e-xl flex flex-col justify-between">
                                <div className="flex flex-col gap-2">
                                    <NavigationMenuItem
                                        icon={Github}
                                        title="Source Code"
                                        action={() => openTab("https://github.com/plsankar/colorhunter")}
                                    />
                                    <NavigationMenuItem
                                        icon={Star}
                                        title="Rate Us"
                                        action={() =>
                                            openTab("https://chrome.google.com/webstore/detail/color-hunter/bpgkpfghcehfbffdfhelbooocbafaakd/reviews")
                                        }
                                    />
                                    <NavigationMenuItem
                                        icon={MessageSquare}
                                        title="Feedback"
                                        action={() => openTab("https://twitter.com/plsankar96")}
                                    />
                                    <NavigationMenuItem icon={User2} title="@plsankar96" action={() => openTab("https://twitter.com/plsankar96")} />
                                </div>
                                <div className="text-gray-500 ">V{chrome.runtime.getManifest().version}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

const NavigationMenuItem: FC<{ icon: LucideIcon; title: string; action?: () => void }> = ({ icon: Icon, title, action }) => {
    return (
        <button
            className="flex flex-row gap-4 px-3 py-2 transition-all duration-300 rounded hover:bg-orange-100 hover:text-orange-500"
            title={title}
            onClick={action}
        >
            <Icon size={16} className="w-5 h-5" />
            <span>{title}</span>
        </button>
    );
};

export default NavigationMenu;
