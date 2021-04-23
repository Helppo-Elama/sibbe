export interface IXHttp {
	url: string;
	data?: Record<string, string | number>;
	success?: boolean;
	loaded?: boolean;
	errors?: boolean;
}
