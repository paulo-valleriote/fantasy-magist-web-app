interface JwtPayload {
	iss?: string
	sub?: string
	exp?: number
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
