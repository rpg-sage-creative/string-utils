import { RegExpCreateOptions } from "../regex/RegExpCreateOptions.js";
type Options = Omit<RegExpCreateOptions, "quantifier"> & {
    /** use ^ and $ to anchor the url to the start/end of the string */
    anchored?: boolean;
    /** expects the two characters used to wrap the url, ex: <> for discord */
    wrapped?: string;
};
export declare function createUrlRegex(): RegExp;
export declare function createUrlRegex(options: Options): RegExp;
export {};
