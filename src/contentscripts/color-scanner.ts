function findAlColors() {
    const colors: string[] = [];
    const allElments = document.querySelectorAll<HTMLElement>("*");
    console.log(allElments.length);
    allElments.forEach((element) => {
        const style = window.getComputedStyle(element);
        if (!colors.includes(style.color)) {
            colors.push(style.color);
        }
        if (!colors.includes(style.backgroundColor)) {
            colors.push(style.backgroundColor);
        }
    });
    return colors;
}

chrome.runtime.onMessage.addListener(function (message, _, sendResponse) {
    if (message.action == "color-scanner") {
        sendResponse({ colors: findAlColors() });
    }
});
