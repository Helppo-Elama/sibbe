// eslint-disable-next-line import/prefer-default-export
export function capitalize(string: string): string {
	const result = string.charAt(0).toUpperCase() + string.slice(1)
	return result
}
export function indexOfWithBooleanReturn(str: string, arr: Array<string>): boolean {
	if (~arr.indexOf(str)) return true
	return false
}
