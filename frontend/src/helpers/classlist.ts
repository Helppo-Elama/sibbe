/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
FOR FUTURE:
    //Vue.prototype.$classes = [];

    Vue.prototype.$classes = classList(Vue.prototype.$classes);
    console.log(Vue.prototype.$classes);

    import { classList } from "@h/classlist";
*/

export default function classList(previousClassList: any): any {
	if (process.env.ANALYZE) {
		const allClasses: any = []
		const allElements = document.querySelectorAll("*")
		for (let i = 0; i < allElements.length; i += 1) {
			const classes = allElements[i].className.toString().split(/\s+/)
			for (let j = 0; j < classes.length; j += 1) {
				const cls = `/${classes[j]}/`
				if (cls && allClasses.indexOf(cls) === -1) allClasses.push(cls)
			}
		}
		allClasses.shift()

		const joinedClasses = allClasses.concat(previousClassList)
		const parsedClasses = joinedClasses.filter(
			(item: any, pos: any) => joinedClasses.indexOf(item) === pos
		)
		return parsedClasses
	}
	return "Classlist only on env ANALYZE"
}
