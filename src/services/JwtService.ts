export function parseJWT(token: string): string {
	if (!token) return ''

	const base64Token = token.split('.')[1]
	const base64 = base64Token.replace('-', '+').replace('_', '/')

	return ''
}
