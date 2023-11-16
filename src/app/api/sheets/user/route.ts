import { parseJWT } from '@/services/JwtService'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	const response = await fetch(process.env.API_URL + '/sheets/user/', {
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer  ' + cookies().get('token'),
		},
	})
	console.log(cookies().getAll())
	console.log(await response.text())
	if (response.ok) {
		const body = await response.json()

		return new Response(body, {
			status: 200,
		})
	}

	return new Response('', {
		status: 404,
	})
}
