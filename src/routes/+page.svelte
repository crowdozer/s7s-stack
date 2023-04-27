<script lang="ts">
	import { clerkInstance, clerkUser } from '$web/stores/clerk';
	import { trpc } from '$web/utils/trpc';

	// just for show
	$: if ($clerkUser) console.log('Logged in as:', $clerkUser);

	async function handleGetMyData() {
		const res = await trpc().users.getMyData.query();
		window.alert('success! check your console');
		console.log(res);
	}

	async function handleLogOut() {
		await $clerkInstance.signOut();
		window.location.reload();
	}

	function handleLogIn() {
		$clerkInstance.openSignIn();
	}
</script>

<main class="flex h-screen flex-col items-center justify-center">
	<h1 class="mb-8 text-8xl font-bold text-white">S7S</h1>
	<p class="mb-1 text-lg text-white">A full stack type-safe framework built with</p>
	<p class="mb-12 text-lg text-white">Svelte-Kit PrismaDB Clerk Redis TailwindCSS</p>

	{#if $clerkUser.user}
		<div class="flex flex-row gap-2">
			<button
				class="rounded-lg bg-white px-4 py-2 text-purple-500 shadow transition duration-200 hover:shadow-lg"
				on:click={handleLogOut}
			>
				Log Out
			</button>
			<button
				class="rounded-lg bg-white px-4 py-2 text-purple-500 shadow transition duration-200 hover:shadow-lg"
				on:click={handleGetMyData}
			>
				Get My Data
			</button>
		</div>
	{:else}
		<button
			class="rounded-lg bg-white px-4 py-2 text-purple-500 shadow transition duration-200 hover:shadow-lg"
			on:click={handleLogIn}
		>
			Log In
		</button>
	{/if}

	<p class="mt-8 text-lg text-white">inspired by T3 for Next</p>
</main>
