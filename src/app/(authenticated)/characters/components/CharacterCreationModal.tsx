import createCharacter from '@/actions/createCharacter'
import FormTemplate from '@/app/components/FormTemplate'
import FormTextInput from '@/app/components/input/FormTextInput'
import FormSelectInput from '@/app/components/input/FormSelectInput'
import Modal from '@/app/components/Modal'
import { Dispatch, SetStateAction } from 'react'

export default function CharacterCreationModal({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
	const levels = []
	for (let i = 0; i < 20; i++) {
		levels.push(i)
	}

	const convertFormData = async (
		formFields: string[],
		formData: FormData,
		request: (props: any) => Promise<void>
	) => {
		const eventData: any = {}

		for (const field of formFields) {
			eventData[field] = formData.get(field)?.toString()
		}

		request(eventData)
	}

	const handleFormAction = async (formData: FormData) => {
		convertFormData(
			['name', 'levels', 'species', 'classes'],
			formData,
			createCharacter
		)
	}

	return (
		<Modal state={isOpen} dispatchFunction={setIsOpen}>
			<div className='flex flex-col gap-6 px-6 pb-8 pt-2'>
				<div className='flex flex-col gap-2 text-center px-4'>
					<h2 className='text-2xl font-semibold border-b-2 border-b-gray-200 py-2'>
						New Character
					</h2>
					<h3 className='opacity-75'>First Steps</h3>
				</div>

				<FormTemplate handleFormAction={handleFormAction}>
					<div className='flex flex-col gap-6 items-center'>
						<div className='flex gap-6'>
							<FormTextInput
								placeholder='Character Name'
								registerField={'name'}
								registerConfigurations={{ required: true }}
							/>
						</div>

						<div className='flex items-end gap-6'>
							<FormSelectInput
								registerField='levels'
								registerConfigurations={{ required: true }}
							>
								<option defaultChecked>Levels</option>
								{levels.map((currLevel) => (
									<option key={'level - ' + currLevel}>{currLevel}</option>
								))}
							</FormSelectInput>

							<FormSelectInput
								registerField='species'
								registerConfigurations={{ required: true }}
							>
								<option defaultChecked>Species</option>
							</FormSelectInput>

							<FormSelectInput
								registerField='classes'
								registerConfigurations={{ required: true }}
							>
								<option defaultChecked>Classes</option>
							</FormSelectInput>
						</div>

						<div className='flex items-end gap-6'>
							<button className='px-6 py-3 bg-gray-50 rounded-md'>
								Cancel
							</button>
							<button className='px-6 py-3 bg-red-500 text-white rounded-md'>
								Create
							</button>
						</div>
					</div>
				</FormTemplate>
			</div>
		</Modal>
	)
}
