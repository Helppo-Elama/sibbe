const serviceUrl: string = process.env.VUE_APP_SERVICE_URL;

const createURL = (): string => {
	const url = serviceUrl + "/api/mail/contact";
	return url;
};

export { createURL };
