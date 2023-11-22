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

	return NextResponse.json({
		status: 400,
		headers: {
			jwtToken: response.headers.get('token'),
			jwtExpiration: new Date(response.headers.get('expiresat') || ''),
		},
	})
}
