export function getActiveTabId() {
    return new Promise<chrome.tabs.Tab | null>((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            if (!activeTab) {
                resolve(null);
            } else {
                resolve(activeTab);
            }
        });
    });
}

export function openTab(url: string) {
    chrome.tabs.create({ url });
}
