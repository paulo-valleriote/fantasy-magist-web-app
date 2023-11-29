'use server'
export default async function convertFormData(formData: FormData) {
	const formFields = formData.entries()
	const eventData: any = {}

	let field = formFields.next()
	while (!field.done) {
		let key = field.value[0]
		let value = field.value[1]

		eventData[key] = value

		field = formFields.next()
	}

	return eventData
}
