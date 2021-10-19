<template>
	<div class="ml-3 relative">
		<jet-dropdown align="left" width="48">
			<template #trigger>
				<span class="inline-flex rounded-md">
					<button
						type="button"
						class="
							inline-flex
							items-center
							border border-transparent
							text-sm
							leading-4
							font-medium
							rounded-md
							text-gray-500
							bg-white
							hover:text-gray-700
							focus:outline-none
							transition
							ease-in-out
							duration-150
						"
					>
						{{ data.title }}
						<JetDropdownSVG />
					</button>
				</span>
			</template>

			<template #content>
				<slot></slot>
				<jet-dropdown-link
					v-for="item in data.items"
					:key="item.route"
					:href="route(item.route)"
					:active="route().current(item.route)"
					>{{ item.title }}
				</jet-dropdown-link>
				<div class="border-t border-gray-100"></div>
			</template>
		</jet-dropdown>
	</div>
</template>

<script>
import JetDropdown from "@/Jetstream/Dropdown"
import JetDropdownLink from "@/Jetstream/DropdownLink"
import JetDropdownSVG from "@/Jetstream/DropDownSVG"

export default {
	components: {
		JetDropdown,
		JetDropdownLink,
		JetDropdownSVG
	},

	props: {
		data: {
			title: {
				type: String
			},
			items: {
				type: Array
			},
			type: Object
		}
	}
}
</script>
