const Header = () => {
    return (
        <div className="sticky top-0 flex flex-row items-center gap-4 p-4 py-5 bg-white border-b shadow-sm">
            <img src={chrome.runtime.getURL("logo.svg")} alt="ColorHunter" className="inline-block w-40" />
        </div>
    );
};

export default Header;
