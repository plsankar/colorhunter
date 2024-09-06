function findAlColors() {
    const colors: string[] = [];
    const allElments = document.querySelectorAll<HTMLElement>("*");
    console.log(allElments.length);
    allElments.forEach((element) => {
        const style = window.getComputedStyle(element);
        colors.push(style.color);
        colors.push(style.backgroundColor);
        colors.push(style.borderColor);
        colors.push(style.outlineColor);
        try {
            const textShadowColors = style.textShadow.split(",").map((shadow) => shadow.trim().split(" ")[0]);
            textShadowColors.forEach((color) => colors.push(color));
        } catch (_ignore) {}

        try {
            const boxShadowColors = style.boxShadow.split(",").map((shadow) => shadow.trim().split(" ")[0]);
            boxShadowColors.forEach((color) => colors.push(color));
        } catch (_ignore) {}

        if ("fill" in style) {
            colors.push(style.fill);
        }
    });
    return colors;
}

chrome.runtime.onMessage.addListener(function (message, _, sendResponse) {
    if (message.action == "color-scanner") {
        sendResponse({ colors: findAlColors() });
    }
});
