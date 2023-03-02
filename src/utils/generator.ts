// HASH RANDOM UUID
export const UUID = (rounds: number = 1, trimmer: number = 4) => {
	let timestamp: string = Math.random().toString(32).substring(trimmer)
	let dateStamp: string = Date.now().toString(32).substring(trimmer)

	return (dateStamp + timestamp).repeat(rounds)
}

export default UUID
