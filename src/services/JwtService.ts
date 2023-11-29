import { NextRequest } from 'next/server'

interface JwtPayload {
	iss?: string
	sub?: string
	exp?: number
}

interface JwtTokenAndPayload {
	token: string
	payload: any
}

export function parseJWT(token: string): JwtPayload {
	if (!token)
		return {
			iss: undefined,
			sub: undefined,
			exp: undefined,
		}

	const base64Token = token.split('.')[1]
	const base64 = base64Token.replace('-', '+').replace('_', '/')

	return JSON.parse(atob(base64))
}

export function getJWTTokenAndPayload(
	request: NextRequest
): JwtTokenAndPayload {
	const header = request.headers.get('cookie')
	const token = header?.split('=')[1] || ''

	return {
		token: token,
		payload: parseJWT(token).sub?.split(',')[0] || '',
	}
}
