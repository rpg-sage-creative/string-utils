export function quote(value) {
    if (value.includes(`"`)) {
        if (!/[“”]/.test(value)) {
            return `“${value}”`;
        }
        if (!/[„“]/.test(value)) {
            return `„${value}“`;
        }
        if (!/[„”]/.test(value)) {
            return `„${value}”`;
        }
        if (!/[‘’]/.test(value)) {
            return `‘${value}’`;
        }
        if (!value.includes(`'`)) {
            return `'${value}'`;
        }
    }
    return `"${value}"`;
}
