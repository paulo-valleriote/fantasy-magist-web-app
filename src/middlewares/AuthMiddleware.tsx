import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
	const storage = cookies()

	if (!storage.get('token')) {
		return NextResponse.redirect(new URL('/', request.url))
	}
}

export const config = {
	matcher: ['/sheet/:path', '/characters/:path'],
}
