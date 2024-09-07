function findAlColors() {
    let colors: string[] = [];
    const allElments = document.querySelectorAll<HTMLElement>("*");
    allElments.forEach((element) => {
        const style = window.getComputedStyle(element);
        colors.push(style.color);

        const borderColors = style.borderColor.split(/(?=rgba?\()/g);
        colors.push(...borderColors);

        const outlineColors = style.outlineColor.split(/(?=rgba?\()/g);
        colors.push(...outlineColors);

        const backgroundColors = style.backgroundColor.split(/(?=rgba?\()/g);
        colors.push(...backgroundColors);

        if ("fill" in style) {
            colors.push(style.fill);
        }
    });

    colors = colors.map((color) => color.trim());
    colors = colors.filter((color) => color.length > 0 && color !== "none" && color.includes("rgb"));
    colors = colors.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    });

    return colors;
}

chrome.runtime.onMessage.addListener(function (message, _, sendResponse) {
    if (message.action == "color-scanner") {
        sendResponse({ colors: findAlColors() });
    }
});
