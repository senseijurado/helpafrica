export const UUID = (rounds: number, trimmer: number = 4): string => {
	let dateStamp: string = Date.now().toString(32)
	let timeStamp: string = Math.random().toString(32)

	return (dateStamp.substring(trimmer) + timeStamp.substring(trimmer)).repeat(rounds)
}
