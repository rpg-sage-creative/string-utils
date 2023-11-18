type TChunkOptionsMaxChunkLengthCallback = (chunkIndex: number) => number;
export type TChunkOptions = {
    lineSplitter: string | RegExp;
    maxChunkLength: number | TChunkOptionsMaxChunkLengthCallback;
    newLineCharacter: string;
    spaceCharacter: string;
    wordSplitter: string | RegExp;
};
export declare function chunk(input: string): string[];
export declare function chunk(input: string, opts: TChunkOptions): string[];
export declare function chunk(input: string, maxChunkLength: number): string[];
export declare function chunk(input: string, maxChunkLengthCallback: TChunkOptionsMaxChunkLengthCallback): string[];
export {};
