<script lang="ts">
	import '~/app.postcss'
	/**
	 * Uncomment this line if you want analytics
	 */
	// import '$web/utils/analytics'
	import { clerkUser } from '$web/stores/clerk';
	if ($clerkUser) console.log($clerkUser)
	
</script>

{#if !$clerkUser.loading}
	<slot />
{:else}
	<div class="contents">
		<p>Loading...</p>
	</div>
{/if}
