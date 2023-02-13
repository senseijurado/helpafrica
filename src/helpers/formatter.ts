/**
 * It takes a price, a number of decimals and a tax percentage and returns a formatted price with taxes
 * @param {number} price - number - The price of the product
 * @param {number} [decimals=0] - number of decimals to show
 * @param {number} [taxes=21] - 21 = 21%
 * @returns A function that returns a formatted price with taxes.
 */
export function usePriceFeesFmt(price: number, decimals: number = 0, taxes: number = 21) {
	let options = {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: decimals,
		minimumFractionDigits: decimals,
	}
	return new Intl.NumberFormat('en-US', options).format(price * (taxes / 100) + price)
}

export function useDiscount(price = 30, discount = 0.4) {
	return price * discount + price
}
