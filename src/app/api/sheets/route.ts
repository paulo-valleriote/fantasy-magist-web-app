import { getJWTTokenAndPayload } from '@/services/JwtService'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	const jwt = getJWTTokenAndPayload(request)

	const token = jwt.token
	const playerId = jwt.payload

	const requestBody = await request.json()

	const response = await fetch(process.env.API_URL + '/sheets/' + playerId, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
		cache: 'no-store',
		body: JSON.stringify(requestBody),
	})

	if (response.ok) {
		const responseBody = await response.json()

		return new NextResponse(JSON.stringify(responseBody), {
			status: 200,
		})
	}

	return new NextResponse('', {
		status: 400,
	})
}
