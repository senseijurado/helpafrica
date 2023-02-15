export function hashID(salts: number = 1): string {
	return (Date.now().toString(32).substring(2) + Math.random().toString(32).substring(2)).repeat(
		salts
	)
}
