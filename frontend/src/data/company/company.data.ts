import { companyImages as images } from "./company.images";
import { ICompanyData } from "../interfaces/company.interface";

class CompanyData implements ICompanyData {
	title = "Suomi Sisters Oy / Villa Sibbe";
	address = "Joensuun raitti 58";
	postalCode = "01150";
	postalArea = "Söderkulla";
	phone = "+358 50 4391925";
	companyEmail = { name: "villa", domain: "sibbe", tld: "fi" };
	salesEmail = { name: "myynti", domain: "sibbe", tld: "fi" };
	ytj =
		"https://tietopalvelu.ytj.fi/yritystiedot.aspx?yavain=2916794&tarkiste=2DD2BCB225B8AB66EA22D4DB589F589FF95B7398";
	images = images;
	reservationUrl = "https://direct-book.com/properties/alarautaoydirect";
	socialUrls = {
		fbUrl: "https://www.facebook.com/villasibbehotel/",
		fbUrlCafe: "https://www.facebook.com/cafesibbekahvila/",
	};

	getEmail(target: string) {
		if (target === "company") {
			const { name, domain, tld } = this.companyEmail;
			return name + "(at)" + domain + "." + tld;
		} else if (target === "sales") {
			const { name, domain, tld } = this.salesEmail;
			return name + "(at)" + domain + "." + tld;
		} else {
			throw "Can't find target: " + target + " for getEmail(target)";
		}
	}
	getEmailLink(target: string) {
		if (target === "company") {
			const { name, domain, tld } = this.companyEmail;
			return "mailto:" + name + "@" + domain + tld;
		} else if (target === "sales") {
			const { name, domain, tld } = this.salesEmail;
			return "mailto:" + name + "@" + domain + tld;
		} else {
			throw "Can't find target: " + target + " for getEmailLink(target)";
		}
	}
}

const companyData = new CompanyData();

const reservationUrl = companyData.reservationUrl;
const socialUrls = companyData.socialUrls;

export { companyData, images, reservationUrl, socialUrls };
