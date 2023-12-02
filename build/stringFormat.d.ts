/**
 * Formats the given string template by using the given arguments.
 * The template is searched for indexed args #{0} as well as named args ${name}.
 * Named strings can be dot notation to find children values.
 * Any value that resolves to /undefined/ will *NOT* be replaced, leaving the unused key in the resulting output.
 * ex: stringFormat(`Hello #{0}.`, "Bob"); >> "Hello Bob."
 * ex: stringFormat(`Hello #{1}.`, "Bob"); >> "Hello #{1}."
 * ex: stringFormat(`Hello ${name}.`, { name:"Bob" }); >> "Hello Bob."
 * ex: stringFormat(`${name.first} ${name.last} is a #{1}.`, { name:{first:"Bob",last:"Dole"} }, "Dev); >> "Bob Dole is a Dev."
 */
export declare function stringFormat<T>(template: string, ...args: T[]): string;
