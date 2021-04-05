import { reservationUrl } from "@d/company/company.data";

export type IErrors = Record<string, string | number>;

export const bookingErrors: IErrors = {
	parseData:
		"Sivusto ei valitettavasti saa yhteyttä varauspalveluun. Voit yrittää mennä itse palveluun <a href=" +
		reservationUrl +
		">täältä</a>.",
};

export const axiosError = (
	type: string | number,
	e: number | string
): { axiosError: number } | string | undefined => {
	switch (type) {
		case 200: {
			console.log("💔 Axios did not get 200. " + e);
			return { axiosError: 200 };
		}
		default:
			console.log("💔 Axios: " + e);
	}
};
