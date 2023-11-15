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
	cookieStorage.set('token', response.headers.get('token') as string, {
		expires: new Date(response.headers.get('expiresat') || ''),
	})

	return NextResponse.json({
		status: 200,
	})
}
