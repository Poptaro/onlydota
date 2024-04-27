<script>
	//@ts-nocheck
	import '../app.pcss';
	import WinLoss from './win-loss.svelte';
	import MostPlayed from './most-played.svelte';
	import RecentMatches from './recent-matches.svelte'

	export let data;
	
	/** @type {import('./$types').ActionData}*/

	export let form;

</script>

<div>
	<div class="flex flex-col">

		<div class="h-[270px] gap-4 grid grid-cols-12">
			<WinLoss 
				winCount={data.userWinLossData.win} 
				loseCount={data.userWinLossData.lose} 
				class="flex flex-row justify-center w-full h-64 border-4 border-solid border-black rounded-3xl p-4 col-span-4"
			/>
			<MostPlayed 
				topThree={data.topThree}
				class="flex flex-col border-4 border-solid h-64 text-xl border-black rounded-3xl p-4 pr-8 divide-y-2 divide-purple-200 col-span-8"
			/>
		</div>

		<div>
			<RecentMatches
			recentMatches={data.recentMatches}
			class="border-4 border-solid h-80 w-128 border-black rounded-3xl p-4"
			/>
		</div>
	</div>
</div>

<style>
	:global(body, html) {
		background-color: black;
		height: 100%;
	}
</style>
