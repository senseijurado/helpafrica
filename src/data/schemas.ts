import { uuid } from '@/utils'

interface FAQOptions {
	q?: string
	answer?: string
	id?: string
}

export let FAQS: FAQOptions[] = [
	{
		q: 'Please',
		answer: 'Pleas',
		id: uuid(),
	},
]
