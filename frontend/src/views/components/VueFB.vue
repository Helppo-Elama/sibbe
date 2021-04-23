<template>
	<div class="text-center" data-aos="fade-up">
		<h3 class="museo museo-heading pb-16">
			<a class="animate" :href="fbUrl">Facebook</a>
		</h3>
		<div ref="fbContainer" class="d-flex justify-center">
			<div id="fb-root">
				<div
					class="fb-page"
					:data-href="fbUrl"
					data-tabs="timeline, messages, events"
					data-width="500"
					data-height="500"
					data-small-header="true"
					data-adapt-container-width="false"
					data-hide-cover="false"
					data-show-facepile="true"
					ref="fbFeed"
				>
					<blockquote :cite="fbUrl" class="fb-xfbml-parse-ignore">
						<a :href="fbUrl">{{ fbUrl }}</a>
					</blockquote>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="js">
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  name: "VueFB",
  props: {
    fbUrl: { type: String },
  },
  data: function () {
    return {
    };
  },

  mounted() {
    console.log("😇 Facebook mounted!");
    if (typeof FB === "undefined") {
      this.fbInit();
    } else {
      window.FB.XFBML.parse();
    }
    this.dedouncedFbResize = window.debounce(this.fbResize, 300);
    window.addEventListener("resize", this.dedouncedFbResize);
    this.$nextTick(() => {
      this.fbMaxWidth();
    });
  },
  methods: {
    fbInit() {
      window.fbAsyncInit = function () {
        FB.init({
          appId: process.env.VUE_APP_FB_APP_ID,
          autoLogAppEvents: true,
          xfbml: true,
          version: "v6.0",
        });
        FB.AppEvents.logPageView();
      };
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/fi_FI/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    },
    fbMaxWidth() {
      let el = this.$refs["fbFeed"];
      let c = this.$refs["fbContainer"].clientWidth;
      if (c > 500) {
        el.setAttribute("data-width", 500);
      } else {
        el.setAttribute("data-width", c);
      }
      console.log("🎢 FB Pre sized.");
    },
    fbResize() {
      let el = this.$refs.fbFeed;
      let c = this.$refs.fbContainer.clientWidth;
      if (c > 500) {
        el.setAttribute("data-width", 500);
        FB.XFBML.parse();
      } else {
        el.setAttribute("data-width", c);
        FB.XFBML.parse();
      }
      console.log("✨ FB Resized.");
    },
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.dedouncedFbResize);
  },
}
</script>

<style lang="scss" scoped>
a {
	color: $color4 !important;
}
a:hover,
a:active {
	color: $color5 !important;
	text-shadow: 0.05rem 0.07rem $color2;
}
</style>
