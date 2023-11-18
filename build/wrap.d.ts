export declare function wrap(input: string, chars: "[]"): string;
export declare function wrap(input: string, chars: "{}"): string;
export declare function wrap(input: string, chars: "()"): string;
export declare function unwrap(input: string, chars: "[]"): string;
export declare function unwrap(input: string, chars: "{}"): string;
export declare function unwrap(input: string, chars: "()"): string;
export declare function isWrapped(input: string): string | false;
export declare function isWrapped(input: string, chars: string): string | false;
