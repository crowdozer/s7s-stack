<script lang="ts">
	/**
	 * Import the app's css file, which in turn imports all of the tailwind utils
	 */
	import '~/app.postcss';

	/**
	 * Uncomment this line if you want analytics
	 */
	// import '$web/utils/analytics'
</script>

<div class="contents">
	<slot />
</div>
