<script lang="ts">
	// import { clerkInstance, clerkUser } from '$web/stores/clerk';
	// import { trpc } from '$web/utils/trpc';

	// just for show
	// $: if ($clerkUser) console.log('Logged in as:', $clerkUser);

	// async function handleGetMyData() {
	// 	const res = await trpc().users.getMyData.query();
	// 	console.log('tRPC from server >', res);
	// 	window.alert('success! check your console');
	// }

	// async function handleLogOut() {
	// 	await $clerkInstance.signOut();
	// 	window.location.reload();
	// }

	// function handleLogIn() {
	// 	$clerkInstance.openSignIn();
	// }
</script>

<div class="bg-img" />

<main
	class="container mx-auto flex h-screen max-w-lg flex-col items-center justify-center self-center p-2 align-middle"
>
	<h1 class="mb-8 text-8xl font-bold">S7S</h1>
	<p class="mb-6 text-lg">A full stack type-safe framework built with</p>
	<p class="mb-8 text-lg">Svelte-Kit · PrismaDB · tRPC · Clerk · Redis · TailwindCSS</p>

	<div class="mb-12 rounded-xl border border-zinc-800 bg-zinc-950 p-8">
		<h3 class="break-before-all overflow-hidden text-ellipsis whitespace-nowrap text-2xl">
			<a href="https://www.github.com/crowdozer/s7s-stack">github.com/crowdozer/s7s-stack</a>
		</h3>
	</div>

	<!-- {#if $clerkUser.user}
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
	{/if} -->

	<p class="mt-8 text-sm italic text-zinc-400">inspired by T3 for Next</p>
</main>

<style>
	.bg-img {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url('/images/bg.webp') no-repeat center center fixed;
		background-size: cover;
		z-index: -1;
		opacity: 0.23579;
	}
</style>
