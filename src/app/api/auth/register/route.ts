import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	const { username, login, password } = await request.json()

	await fetch(process.env.API_URL + '/auth/register', {
		method: 'post',
		body: JSON.stringify({ username, login, password }),
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
		},
	})

	return NextResponse.json({
		status: 200,
	})
}
