<template>
	<div data-aos="fade-up">
		<h3 v-if="sender === 'feedback'" class="bello pb-16">Palaute</h3>
		<h3 v-else class="bello pb-16">Yhteydenotto</h3>
		<v-container>
			<div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
				<form>
					<v-text-field
						outlined
						v-model="name"
						:error-messages="nameErrors"
						label="Nimi"
						type="text"
						@input="$v.name.$touch()"
						@blur="$v.name.$touch()"
					></v-text-field>
					<v-text-field
						outlined
						v-model="email"
						:error-messages="emailErrors"
						label="Sähköposti"
						type="email"
						@input="$v.email.$touch()"
						@blur="$v.email.$touch()"
					></v-text-field>
					<v-textarea
						outlined
						v-model="message"
						:error-messages="messageErrors"
						label="Viesti"
						type="text"
						@input="$v.message.$touch()"
						@blur="$v.message.$touch()"
					></v-textarea>
					<div v-if="xhttp.success" class="color-green mb-5 display-1 font-weight-bold">
						Viesti lähetetty!
					</div>
					<div v-if="xhttp.errors" class="color-red mb-5 display-1 font-weight-bold">
						Valitettavasti emme voineet lähettää viestiä :(
					</div>
					<v-btn class="mr-4 primary" @click="submit"> Lähetä </v-btn>
					<v-btn class="warn" @click="clear"> Tyhjennä </v-btn>
				</form>
			</div>
		</v-container>
	</div>
</template>
<script lang="ts">
import createURL from "@d/contact/contact.data"
import { IXHttp } from "@d/interfaces/xhttp.interface"
import { axiosPostContactData as axios } from "@in/axios"
import Vue, { VueConstructor } from "vue"
import { Validation, validationMixin } from "vuelidate"
import { email, minLength, required } from "vuelidate/lib/validators"

interface ValidationEvaluation {
	[ruleName: string]: boolean
}

type ValidationProperties<V> = {
	[P in Exclude<keyof V, "$v">]?: Validation & ValidationProperties<V[P]> & ValidationEvaluation
}

interface ValidationGroups {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[groupName: string]: Validation & ValidationProperties<any>
}
interface Vuelidate {
	$v: ValidationProperties<Vue> & ValidationGroups & Validation
	delayTouch(v: Validation): void
}

const contactForm = (Vue as VueConstructor<Vue & Vuelidate>).extend({
	name: "ContactForm",
	components: {},
	mixins: [validationMixin],
	validations: {
		name: { required, minLength: minLength(3) },
		email: { required, email },
		message: { required, minLength: minLength(10) }
	},
	mounted(): void {
		console.log("📞 Contact form mounted.")
	},
	props: {
		sender: { type: String, required: true }
	},
	data(): {
		name: string
		email: string
		message: string
		xhttp: IXHttp
	} {
		return {
			name: "",
			email: "",
			message: "",
			xhttp: {
				url: createURL(),
				success: false,
				loaded: true,
				errors: false
			}
		}
	},
	computed: {
		nameErrors() {
			const errors: Array<string> = []
			if (!this.$v.name.$dirty) return errors
			if (!this.$v.name.minLength) errors.push("Nimen pitää olla yli 3 merkkiä")
			if (!this.$v.name.required) errors.push("Nimi tarvitaan...")
			return errors
		},
		emailErrors() {
			const errors: Array<string> = []
			if (!this.$v.email.$dirty) return errors
			if (!this.$v.email.email) errors.push("Sähköpostiosoitteen täytyy olla oikein")
			if (!this.$v.email.required) errors.push("Sähköposti tarvitaan...")
			return errors
		},
		messageErrors() {
			const errors: Array<string> = []
			if (!this.$v.message.$dirty) return errors
			if (!this.$v.message.minLength) errors.push("Viestin täytyy olla yli 10 merkkiä")
			if (!this.$v.message.required) errors.push("Viesti tarvitaan...")
			return errors
		}
	},
	methods: {
		async submit(): Promise<void> {
			const { loaded } = this.xhttp
			const request = this.xhttp
			this.$v.$touch()
			if (loaded) {
				this.xhttp.loaded = false
				this.xhttp.success = false
				this.xhttp.errors = false
				request.data = {
					name: this.name,
					email: this.email,
					message: this.message,
					sender: this.sender
				}
				const response = await axios(request)
				if (response) {
					this.clear()
					this.xhttp.loaded = true
					this.xhttp.success = true
				} else {
					this.xhttp.loaded = true
					this.xhttp.errors = true
				}
			}
		},
		clear() {
			this.$v.$reset()
			this.name = ""
			this.email = ""
			this.message = ""
		}
	}
})
export default contactForm
</script>
<style lang="scss">
h3 {
	font-size: 3em;
}
</style>
