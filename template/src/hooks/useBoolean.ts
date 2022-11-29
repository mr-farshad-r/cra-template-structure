import { useState } from "react";

export const useBoolean = (
    initial: boolean
): [boolean, (force?: boolean) => void] => {
    const [value, setValue] = useState(initial);
    const toggle = (force: boolean | undefined) =>
        setValue((v) => (typeof force === "boolean" ? force : !v));
    return [value, toggle];
};
