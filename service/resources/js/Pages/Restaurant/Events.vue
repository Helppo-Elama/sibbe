<template>
	<app-layout>
		<template #header>
			<h2 class="font-semibold text-xl text-gray-800 text-2xl text-center">
				Ravintolan tapahtumat
			</h2>
		</template>
		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="bg-white shadow-xl sm:rounded-lg pb-6">
					<div class="pt-6 px-10">
						<div class="font-semibold text-xl pb-4 text-center">BLABLABLA</div>
						<ul class="list-disc px-6 pb-3">
							<li>BLA</li>
						</ul>
					</div>
					<div class="flex justify-center">
						<jet-button class="px-6" @click.native="addEvent(events.length)" action="add">
							Lisää uusi tapahtuma
						</jet-button>
					</div>
					<div v-for="(event, i) in events" :key="event + i">
						<div>
							<div class="flex justify-between pb-3 text-2xl text-gray-700 mx-3">
								<div class="break-all">{{ event.title }}</div>
								<div>
									<jet-button class="px-6" @click.native="deleteEvent()" action="delete">
										Poista
									</jet-button>
								</div>
							</div>
							<div @change="updateHandler(i)" class="mx-3">
								<text-input v-model="event.title">Tapahtuma</text-input>
								<!--<text-area v-model="event.body" :ref="i">Tarkempi kuvaus</text-area>-->
								<ckeditor
									v-model="event.body"
									:config="editorConfig"
									@namespaceloaded="onNamespaceLoaded"
									>Tarkempi kuvaus</ckeditor
								>
								<number-between-input
									:price="event.price"
									@price="event.price = $event"
									:priceAdditional="event.priceAdditional"
									@priceAdditional="event.priceAdditional = $event"
									>Hinta</number-between-input
								>
							</div>
						</div>
					</div>
					<!--
					<div
						v-for="(event, i) in events"
						class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2"
						:key="event.title + i"
					>
						<div
							class="
								mt-3
								py-6
								text-grey-600 text-2xl text-center
								bg-gray-300
								lg:col-span-2
								bg-gray-300
							"
						>
							BLABLA
						</div>

					</div>
					-->
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
// import * as CKEditor from "@/../assets/vendor/ckeditor5/build/ckeditor.js"
import AppLayout from "@/Layouts/AppLayout"
import JetButton from "@/Jetstream/Button"
import TextInput from "@/Components/Common/InputText"
// import TextArea from "@/Components/Common/TextArea"
import NumberBetweenInput from "@/Components/Common/InputNumberBetween"

const eventProtoType = {
	id: undefined,
	location: undefined,
	start: undefined,
	end: undefined,
	title: undefined,
	body: undefined,
	price: undefined,
	priceAdditional: undefined,
	json: undefined,
	servingTime: undefined,
	icon: undefined,
	images: undefined
}

export default {
	components: {
		AppLayout,
		JetButton,
		TextInput,
		//	TextArea,
		NumberBetweenInput
	},
	props: {
		data: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			events: this.data,
			editorConfig: {
				fileTools: {
					isFileUploadSupported: true
				},
				/*
				filebrowserImageBrowseUrl: "/filemanager?type=Images",
				filebrowserImageUploadUrl: "/filemanager/upload?type=Images&_token=",
				filebrowserBrowseUrl: "/filemanager?type=Files",
				filebrowserUploadUrl: "/filemanager/upload?type=Files&_token=",
				*/
				extraPlugins: ["imageresponsive", "image2", "widget", "lineutils", "dialog", "clipboard"]
			}
			// CKEditor
		}
	},
	mounted() {
		console.log(this.data)
		console.log(this.CKEditor)
	},
	methods: {
		onNamespaceLoaded(CKEDITOR) {
			CKEDITOR.plugins.addExternal(
				"imageresponsive",
				"https://service.sibbe.test/js/ckeditor/plugins/imageresponsive/plugin.js",
				"plugin.js"
			)
		},
		addEvent() {
			this.events.push(eventProtoType)
			/*
			this.$nextTick(() => {
				const el = this.$refs[ref][0].$refs.textarea

				this.CKEditor.Editor.create(el, options)

					.then((editor) => {
						console.log(editor)
					})

					.catch((error) => {
						console.error(error)
					})

			})
			*/
		},
		postEvent() {},
		updateEvent(id) {
			console.log("update", id)
		},
		deleteEvent(id) {
			console.log("delete", id)
		}
	}
}
</script>
