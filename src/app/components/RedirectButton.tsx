'use client'

import Link from 'next/link'

interface IRedirectButtonProps {
	to: string
	content: string
	withBorder?: boolean
}

export default function RedirectButton({
	to,
	content,
	withBorder = false,
}: IRedirectButtonProps) {
	if (withBorder) {
		return (
			<Link
				href={to}
				className='px-4 py-2 border-white border-[1px] rounded-md'
			>
				{content}
			</Link>
		)
	}

	return <Link href={to}>{content}</Link>
}
