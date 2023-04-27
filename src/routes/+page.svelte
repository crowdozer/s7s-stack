<script>
	// import { onMount } from 'svelte'
	const navbarOpen = false;
	const flyer = false;
	const flyerFirst = false;
</script>

<header class="clearNav fixed top-0 z-50 w-full">
	<div class="mx-auto flex max-w-5xl flex-col flex-wrap p-5 md:flex-row">
		<div class="flex flex-row items-center justify-between p-3 md:p-1">
			<a href="/" class="mb-4 flex text-3xl font-medium text-white md:mb-0">S3 Stack</a>
			<button
				class="ml-auto cursor-pointer content-end px-3 py-1 pb-4 leading-none text-white outline-none focus:outline-none md:hidden"
				type="button"
				aria-label="button"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					class="feather feather-menu"
				>
					<line x1="3" y1="12" x2="21" y2="12" />
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="3" y1="18" x2="21" y2="18" />
				</svg>
			</button>
		</div>
		<div class={'flex-grow items-center md:flex' + (navbarOpen ? ' flex' : ' hidden')}>
			<div class="grow" />
			<a
				href="https://github.com/"
				rel="noopener noreferrer"
				target="_blank"
				class="invisible pl-7 md:visible"
			>
				<svg
					width="30"
					height="20"
					viewBox="0 0 25 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					title="GitHub logo"
					class="github-link--logo"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z"
						fill="white"
					/>
				</svg>
			</a>
		</div>
	</div>
</header>

<section class="body-font text-gray-600">
	<div class="mx-auto max-w-5xl pb-24 pt-52">
		<h1 class="text-80 font-4 lh-6 ld-04 mb-6 text-center font-bold text-white">
			Create your next website fast and easy
		</h1>
		<h2 class="font-4 lh-6 ld-04 pb-11 text-center text-2xl font-semibold text-gray-700">
			S3 Stack is a free to use template for websites made
			<br />
			with Svelte-Kit, Upstash, Clerk, and styled with Tailwind CSS
		</h2>
		<div class="ml-6 text-center">
			<a
				class="text-md focus:shadow-outline inline-flex transform items-center bg-transparent bg-white px-7 py-3 font-semibold text-black transition duration-500 ease-in-out hover:bg-white hover:text-black md:mt-0"
				href="/"
			>
				<div class="flex text-lg">
					<span class="justify-center">View All Templates</span>
				</div>
			</a>
			<a
				class="text-md focus:shadow-outline ml-11 inline-flex transform items-center bg-transparent bg-gradient-to-r from-blue-500 to-blue-800 px-14 py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out md:mt-0"
				href="/"
			>
				<div class="flex text-lg">
					<span class="justify-center">Purchase</span>
				</div>
			</a>
		</div>
	</div>
	<div class="container mx-auto flex flex-col items-center justify-center">
		<img
			class="g327 mb-10 w-3/4 border object-cover object-center shadow-md"
			alt="Placeholder"
			src="./images/placeholder.png"
		/>
	</div>
	<h2
		class="mb-1 pt-40 text-center text-2xl font-semibold tracking-tighter text-gray-200 md:text-6xl lg:text-7xl"
	>
		Clean and tidy code.
	</h2>
	<br />
	<p class="fs521 mx-auto text-center text-xl font-normal leading-relaxed text-gray-300 lg:w-2/3">
		Here is our collection of free to use templates made with Next.js & styled with Tailwind CSS.
	</p>
	<div class="fsac4 mx-auto max-w-4xl px-3 pb-24 pt-12 md:px-1">
		<div class="ktq4">
			<h3 class="pt-3 text-lg font-semibold text-white">Lorem ipsum dolor sit amet</h3>
			<p class="value-text text-md fkrr1 pt-2 text-gray-200">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a libero in
				finibus. Maecenas a nisl vitae ante rutrum porttitor.
			</p>
		</div>
		<div class="ktq4">
			<h3 class="pt-3 text-lg font-semibold text-white">Lorem ipsum dolor sit amet</h3>
			<p class="value-text text-md fkrr1 pt-2 text-gray-200">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a libero in
				finibus. Maecenas a nisl vitae ante rutrum porttitor.
			</p>
		</div>
		<div class="ktq4">
			<h3 class="pt-3 text-lg font-semibold text-white">Lorem ipsum dolor sit amet</h3>
			<p class="value-text text-md fkrr1 pt-2 text-gray-200">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a libero in
				finibus. Maecenas a nisl vitae ante rutrum porttitor.
			</p>
		</div>
		<div class="ktq4">
			<h3 class="pt-3 text-lg font-semibold text-white">Lorem ipsum dolor sit amet</h3>
			<p class="value-text text-md fkrr1 pt-2 text-gray-200">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a libero in
				finibus. Maecenas a nisl vitae ante rutrum porttitor.
			</p>
		</div>
	</div>
	<div class="fsac4 mx-auto max-w-6xl px-3 pb-32 pt-32 md:px-1">
		<div class="ktq4">
			<h3 class="pt-3 text-lg font-semibold text-white">Lorem ipsum dolor sit amet</h3>
			<p class="value-text text-md fkrr1 pt-2 text-gray-200">
				Fusce pharetra ligula mauris, quis faucibus lectus elementum vel. Nullam vehicula, libero at
				euismod tristique, neque ligula faucibus urna, quis ultricies massa enim in nunc. Vivamus
				ultricies, quam ut rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec odio.
			</p>
		</div>
		<div class="ktq4">
			<h3 class="pt-3 text-lg font-semibold text-white">Lorem ipsum dolor sit amet</h3>
			<p class="value-text text-md fkrr1 pt-2 text-gray-200">
				Fusce pharetra ligula mauris, quis faucibus lectus elementum vel. Nullam vehicula, libero at
				euismod tristique, neque ligula faucibus urna, quis ultricies massa enim in nunc. Vivamus
				ultricies, quam ut rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec odio.
			</p>
		</div>
	</div>
	<section class="relative pb-24">
		<div class="mx-auto max-w-6xl px-4 text-center sm:px-6">
			<div class="py-24 md:py-36">
				<h1 class="mb-5 text-6xl font-bold text-white">Subscribe to our newsletter</h1>
				<h1 class="mb-9 text-2xl font-semibold text-gray-200">
					Enter your email address and get our newsletters straight away.
				</h1>
				<input
					type="email"
					placeholder="jack@example.com"
					name="email"
					autocomplete="email"
					class="mt-2 w-1/4 rounded-md border border-gray-600 bg-black py-3 pl-2 pr-2 font-semibold text-gray-800 hover:border-gray-700"
				/>{' '}
				<a
					class="ml-2 mt-2 inline-flex transform items-center rounded-lg border bg-transparent bg-white px-14 py-3 font-medium text-black transition duration-500 ease-in-out"
					href="/"
				>
					<span class="justify-center">Subscribe</span>
				</a>
			</div>
		</div>
	</section>
</section>

<footer class="pb-4 text-gray-200">
	<div class="mx-auto max-w-5xl divide-y divide-gray-900 px-4 sm:px-6 md:px-8 xl:max-w-5xl">
		<ul
			class="grid gap-y-10 text-sm font-medium sm:grid-cols-2 sm:pb-20 md:grid-cols-3 lg:grid-cols-4"
		>
			<li class="row-span-2 space-y-5">
				<h2 class="text-2xl tracking-wide text-white">Company</h2>
				<ul class="text-md space-y-4">
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/"> Jobs </a>
					</li>
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/"> Merch </a>
					</li>
					{' '}
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/"> Brand </a>
					</li>
					{' '}
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/">
							Meetups
						</a>
					</li>
				</ul>
			</li>
			<li class="row-span-2 space-y-5">
				<h2 class="text-2xl tracking-wide text-white">Newsroom</h2>
				<ul class="space-y-4">
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/"> News </a>
					</li>
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/"> Press </a>
					</li>
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/"> Blog </a>
					</li>
				</ul>
			</li>
			<li class="row-span-2 space-y-5">
				<h2 class="text-2xl tracking-wide text-white">Products</h2>
				<ul class="space-y-4">
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/">
							Hosting
						</a>
					</li>
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/">
							Domains
						</a>
					</li>
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/">
							Security
						</a>
					</li>
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/"> SSL </a>
					</li>
				</ul>
			</li>
			<li class="space-y-5">
				<h2 class="text-2xl tracking-wide text-white">Connect</h2>
				<ul class="space-y-4">
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/">
							Twitter
						</a>
					</li>
					<li>
						<a class="text-xl transition-colors duration-200 hover:text-white" href="/">
							Facebook
						</a>
					</li>
					<li>
						<a
							class="text-xl font-semibold transition-colors duration-200 hover:text-white"
							href="/"
						>
							Instagram
						</a>
					</li>
				</ul>
			</li>
		</ul>
		<div
			class="flex flex-col-reverse justify-between border-t border-black bg-top pb-4 pt-5 lg:flex-row"
		>
			<ul class="flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
				<li>
					<a
						href="/"
						class="text-md hover:text-deep-purple-accent-400 font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
					>
						Terms of Service
					</a>
				</li>
				<li>
					<a
						href="/"
						class="text-md hover:text-deep-purple-accent-400 font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
					>
						Privacy Policy
					</a>
				</li>
				<li>
					<a
						href="/"
						class="text-md hover:text-deep-purple-accent-400 font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
					>
						Ad Choices
					</a>
				</li>
				<li>
					<a
						href="/"
						class="text-md hover:text-deep-purple-accent-400 font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
					>
						Cookie Policy
					</a>
				</li>
				<li>
					<a
						href="/"
						class="text-md hover:text-deep-purple-accent-400 font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
					>
						Partners
					</a>
				</li>
			</ul>
			<ul class="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
				<a
					href="/"
					class="text-md hover:text-deep-purple-accent-400 font-semibold tracking-tight text-gray-200 transition-colors duration-300 hover:text-white"
				>
					© 2021 Company Inc.
				</a>
			</ul>
		</div>
	</div>
</footer>
