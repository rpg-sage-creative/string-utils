type CodeBlockMatch = {
    index: number;
    length: number;
    match: string;
    ticks: number;
};
export declare function matchCodeBlocks(content: string): CodeBlockMatch[];
export {};
