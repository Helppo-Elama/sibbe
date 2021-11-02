<template>
	<app-layout>
		<template #header>
			<h2 class="font-semibold text-xl text-gray-800 text-2xl text-center">CKEDITOR</h2>
		</template>
		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="bg-white shadow-xl sm:rounded-lg">
					<div class="py-6 px-3 sm:px-5 md:px-20 bg-white border-b border-gray-200">
						<div class="mt-8 text-2xl text-center">Editori</div>
						<div class="mt-6"></div>
					</div>
					<ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-build-classic"
import "@ckeditor/ckeditor5-build-classic/build/translations/fi"
import AppLayout from "@/Layouts/AppLayout"

export default {
	components: {
		AppLayout
	},
	data() {
		return {
			editor: CKEditor,
			editorData: "",
			editorConfig: {
				language: "fi",
				/*
				toolbar: [
					"heading",
					"|",
					"bold",
					"italic",
					"link",
					"bulletedList",
					"numberedList",
					"blockQuote"
				],
				*/
				filebrowserImageBrowseUrl: "/filemanager?type=Images",
				filebrowserImageUploadUrl: "/filemanager/upload?type=Images&_token=",
				filebrowserBrowseUrl: "/filemanager?type=Files",
				filebrowserUploadUrl: "/filemanager/upload?type=Files&_token="
			}
		}
	}
}
</script>
