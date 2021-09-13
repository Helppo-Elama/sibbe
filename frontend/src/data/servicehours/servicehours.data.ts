const serviceUrl: string = process.env.VUE_APP_SERVICE_URL

export const createApiURL = (target: string): string => {
	if (target === undefined) throw new Error(`❌ createURL does not have a target set: ${target}`)
	const url = `${serviceUrl}/api/servicehours?title=${target}`
	return url
}
export const closedUntilApiURL = (target: string): string => {
	const url = `${serviceUrl}/api/servicehours/closeduntil?title=${target}`
	return url
}
