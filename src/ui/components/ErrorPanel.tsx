import { FC } from "react";
import WebColors from "../illustrations/WebColors";

const ErrorPanel: FC<{ message: string }> = ({ message }) => {
    return (
        <div className="flex flex-col items-center justify-center flex-grow gap-5 p-4">
            <WebColors />
            <p className="text-sm text-center">{message}</p>
        </div>
    );
};

export default ErrorPanel;
