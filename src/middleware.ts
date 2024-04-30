import { NextRequest, NextResponse } from 'next/server'
/* Update paths that need authentication here */
export const config = {
	matcher: ['/admin/:path*'],
}

export function middleware(req: NextRequest) {
	const basicAuth = req.headers.get('authorization')

	if (basicAuth) {
		const authValue = basicAuth.split(' ')[1]
		const [user, pwd] = atob(authValue).split(':')

		const validUser = process.env.BASIC_AUTH_USER
		const validPassWord = process.env.BASIC_AUTH_PASSWORD

		console.log('user:', user)
		console.log('pwd:', pwd)
		console.log('validUser:', validUser)
		console.log('validPassWord:', validPassWord)

		if (user === validUser && pwd === validPassWord) {
			console.log('authenticated')
			return NextResponse.next() /* This passes you to the protected routes */
		}
	}

	return new Response('Authentication Required!', {
		status: 401,
		headers: {
			'WWW-Authenticate': "Basic realm='admin'",
		},
	})
}
