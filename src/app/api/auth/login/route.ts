import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	const { login, password } = await request.json()

	const response = await fetch(process.env.API_URL + '/auth/login', {
		method: 'post',
		body: JSON.stringify({ login, password }),
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
		},
	})

	const cookieStorage = cookies()
	cookieStorage.set('token', response.headers.get('tokenstring') as string, {
		expires: new Date(response.headers.get('tokenexpiration') || ''),
	})

	return NextResponse.json({
		status: 200,
	})
}
