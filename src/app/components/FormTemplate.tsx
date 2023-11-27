import convertFormData from '@/actions/convertFormData'

interface FormTemplateProps {
	children: React.ReactNode | React.ReactNode[]
	request: (props: any) => {}
}

export default async function FormTemplate({
	children,
	request,
}: FormTemplateProps) {
	return (
		<form
			className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4 text-white'
			action={request}
		>
			{children}
		</form>
	)
}
