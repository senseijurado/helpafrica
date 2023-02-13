export function uuid(salts: number = 1, trimmer: number = 4): string {
	let timestamp: string = Math.random().toString(32).substring(trimmer)
	let dateStamp: string = Date.now().toString(32).substring(trimmer)

	return (dateStamp + timestamp).repeat(salts)
}

export default uuid
