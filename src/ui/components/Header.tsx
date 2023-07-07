import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <div className="sticky top-0 flex flex-row items-center w-full gap-4 px-4 py-4 bg-white border-b shadow-sm">
            <img src={chrome.runtime.getURL("logo.svg")} alt="ColorHunter" className="inline-block w-40" />
            <HeaderMenu />
        </div>
    );
};

export default Header;
