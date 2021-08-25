/* eslint-disable import/prefer-default-export */
const serviceUrl: string = process.env.VUE_APP_SERVICE_URL

export const createApiURL = (target: string): string => {
	const url = `${serviceUrl}/api/servicehours?title=${target}`
	return url
}
