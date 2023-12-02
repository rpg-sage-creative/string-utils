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
    }
    return `"${value}"`;
}
