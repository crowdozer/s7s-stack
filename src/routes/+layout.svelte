<script lang="ts">
	/**
	 * Import the app's css file, which in turn imports all of the tailwind utils
	 */
	import '~/app.postcss';

	/**
	 * Comment this line if you don't want analytics or aren't on Vercel
	 */
	import '$web/utils/analytics';
</script>

<div class="contents">
	<slot />
</div>
