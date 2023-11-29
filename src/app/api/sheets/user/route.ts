import { getJWTTokenAndPayload } from '@/services/JwtService'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	const jwt = getJWTTokenAndPayload(request)

	const token = jwt.token
	const playerId = jwt.payload

	const response = await fetch(
		process.env.API_URL + '/sheets/user/' + playerId,
		{
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		}
	)

	if (response.ok) {
		const body = await response.json()

		return new NextResponse(JSON.stringify(body), {
			status: 200,
		})
	}

	return new NextResponse('', {
		status: 404,
	})
}
