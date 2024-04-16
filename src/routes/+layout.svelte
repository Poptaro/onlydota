<script>
	import { Button } from '$lib/components/ui/button';

	import gliu from '$lib/img/gliu.png';

	export let data;

	//  const user = data.userProfileData.profile
	const user = data.userProfileData;
</script>

<div class="whole">
	<div class="headerbox ahri mt-1">
		<img
			src={gliu}
			alt="BHBS"
			width="200px"
			height="200px"
			class="border-4 rounded-full w-44 h-44"
		/>
		<a href={user.profileurl}>
			<p class="text-4xl text-white">{user.personaname}</p>
		</a>
		<p class="text-2xl text-white">Rokusho || Poptaro</p>
	</div>
	<div class="flex flex-row">
		<div class="mx-4">
			<a href="/">
				<Button class="w-36 hover:bg-purple-300 hover:text-black">STATS</Button>
			</a>
		</div>
		<div>
			<a href="/review">
				<Button class="w-36 hover:bg-purple-300 hover:text-black">REVIEWS</Button>
			</a>
		</div>
	</div>
	<slot />
</div>

<style>
	:global(body, html) {
		background-color: black;
		height: 100%;
		min-width: 1000px;
		width: 1369px;
	}

	.whole {
		background-color: ghostwhite;
		display: flex;
		flex-direction: column;
		border: 3px black solid;
		border-radius: 24px;
		padding: 32px;
		margin:0;
		width: 100%;
		max-height: 100%;
		height: 100%;
		gap: 16px;
	}
	.headerbox {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		border: black 4px solid;
		border-radius: 24px;
		text-align: center;
		padding: 8px;
        max-width:100%;
	}
    .ahri{
        background-image: url('$lib/img/AHRIBG.jpeg');
        background-repeat: no-repeat;
        background-position: 90% 17%;

        background-size: 2030px;


    }
</style>
