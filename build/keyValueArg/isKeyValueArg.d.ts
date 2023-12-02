/** Returns true if the value is key=value or key="value" or key="", false otherwise. */
export declare function isKeyValueArg(value: string): boolean;
/** Returns true if the value is key=value or key="value" or key="" *AND* the key matches the given key, false otherwise. */
export declare function isKeyValueArg(value: string, key: string): boolean;
