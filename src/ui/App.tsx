import { ColorScannerResponse, EventBlast, TColor } from "./types";
import { FC, useEffect, useState } from "react";

import Color from "color";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getActiveTabId } from "./utils";
import { toast } from "react-hot-toast";
import Header from "./components/Header";
import ErrorPanel from "./components/ErrorPanel";

function App() {
    const [colors, setColors] = useState<TColor[]>([]);
    const [error, setError] = useState<string | null>(null);

    const scanTheTabForColors = async () => {
        const activeTab = await getActiveTabId();
        if (!activeTab || !activeTab.id) {
            setError("Sorry, Unable to scan the current page, please try refreshing the page");
            return;
        }
        if (!activeTab.url?.startsWith("http")) {
            setError("Sorry, This page is not scannable");
            return;
        }
        chrome.tabs.sendMessage<EventBlast, ColorScannerResponse>(activeTab.id, { action: "color-scanner" }, function (response) {
            if (!response || !response.colors) {
                setError("Sorry, Unable to scan the current page, please try refreshing the page");
                return;
            }
            const sortedColors = response.colors
                .sort((a: string, b: string) => {
                    const aColor = Color(a);
                    const bColor = Color(b);
                    return aColor.red() + aColor.green() + aColor.blue() - (bColor.red() + bColor.green() + bColor.blue());
                })
                .map((color) => {
                    const parsedColor = Color(color);
                    return {
                        red: parsedColor.red(),
                        green: parsedColor.green(),
                        blue: parsedColor.blue(),
                        alpha: parsedColor.alpha(),
                    };
                })
                // Remove transparent color
                .filter((value) => value.alpha !== 0);
            setColors(sortedColors);
        });
    };

    useEffect(() => {
        scanTheTabForColors();
    }, []);

    return (
        <div className="relative flex flex-col min-h-screen">
            <Header />
            {colors.length > 0 && (
                <div className="flex flex-col gap-5 p-5">
                    {colors.map((color, index) => (
                        <ColorItem value={color} key={index} />
                    ))}
                </div>
            )}
            {error && <ErrorPanel message={error} />}
        </div>
    );
}

const ColorItem: FC<{ value: TColor }> = ({ value }) => {
    const color = `rgb(${value.red}, ${value.green}, ${value.blue}${value.alpha === 1 ? "" : `, ${value.alpha}`})`;
    const textColour = Math.round((value.red * 299 + value.green * 587 + value.blue * 114) / 1000) > 125 ? "black" : "white";
    return (
        <CopyToClipboard text={color} onCopy={() => toast.success(`Copied!`)}>
            <div
                className="flex items-center justify-center p-5 text-center border rounded cursor-pointer text-md"
                style={{ color: textColour, backgroundColor: color }}
            >
                {color}
            </div>
        </CopyToClipboard>
    );
};

export default App;
