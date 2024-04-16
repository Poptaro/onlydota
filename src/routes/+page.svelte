<script>
	import '../app.pcss';

	export let data;

	/** @type {import('./$types').ActionData}*/
	export let form;

	// let winPercent = +(data.userWinLossData.win/(data.userWinLossData.win + data.userWinLossData.lose)).toLocaleString() * 100
</script>

<div>
	<div class="flex flex-col">
		<div class="flex h-[270px] gap-4">
			<div class="flex flex-row justify-center basis-1/3 border-4 border-solid h-64 w-64 border-black rounded-3xl p-4">
				<div class="flex flex-col h-36 gap-8 border-none">
					<p class="text-3xl underline text-center">WIN&nbsp/&nbspLOSS</p>
					<div class="flex justify-center text-3xl">
						<p class="text-green-400">
							<!-- {data.userWinLossData.win} -->
							500
						</p>
						<p class="">&nbsp/&nbsp</p>
						<p class="text-red-400">
							<!-- {data.userWinLossData.lose} -->
							500
						</p>
					</div>
					<div class="flex justify-center text-3xl">
						<!-- {winPercent.toLocaleString()}% -->
					</div>
				</div>
			</div>
			<div class="flex flex-col basis-2/3 border-4 border-solid h-64 w-84 text-xl border-black rounded-3xl p-4">
				<p class="text-3xl mb-4 ml-2">Most Played Heroes</p>
				{#each data.hero as hero}
					<div class="flex justify-between ml-8">
						<div class="flex flex-row items-center gap-4 p-1">
							<div class="rounded-full h-12 w-12 border-solid border-black border-4" />
							<p>{hero.name}</p>
							<p class="text-green-500">Wins: {hero.wins}</p>
							<p class="text-red-500">Losses: {hero.losses}</p>
						</div>
						<div class="flex items-center">
							<p class="mr-8">Total Games: {hero.total}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>


		<div class="border-4 border-solid h-80 w-128 border-black rounded-3xl p-4">
			<div class="flex flex-col">
				<div>
					<div class="mb-4"> 
						<p class="text-3xl">Recent Matches</p>
					</div>
				</div>

				<div class="flex flex-row">
					<div class="grid grid-cols-8 text-center justify-center items-center">
							<div class="h-6">Match ID</div>
							<div/>
							<div/>
							<div class="text-xl">Kills</div>
							<div class="text-xl">Deaths</div>
							<div class="text-xl">Assists</div>
							<div class="text-xl">Last Hits</div>
							<div class="text-xl">Denies</div>
								{#each data.matches as match}
									<div>
										{match.matchid}
									</div>
									<div class="flex justify-center">
										<p class="border-2 rounded-full border-solid w-12 h-12 text-center">{match.heroimg}</p>
									</div>
									<div>
										{match.hero}
									</div>
									<div class="text-green-500">
										{match.kills}
									</div>

									<div class="text-red-500">
										{match.deaths}
									</div>
									<div class="text-yellow-500">
										{match.assists}
									</div>
									<div class="">
										{match.lh}
									</div>
									<div class="">
										{match.dn}
									</div>
								{/each}			
					</div>
					<div class="grid grid-cols-8 text-center justify-center items-center">
						<!-- row1 -->
						<div class="text-xl">Damage</div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div>chung</div>
						<!-- row2 -->
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div>chungus</div>
						<!-- row3 -->
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div>chungus</div>
						<!-- row4 -->
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div>chungus</div>
					</div>
				</div>

			</div>
		</div>
	</div>
			
</div>

<style>
	:global(body, html) {
		background-color: black;
		height: 100%;
	}

	.skillpoint-box {
		display: flex;
		flex-wrap: nowrap;
		gap: 4px;
		margin-bottom: 4px;
	}
	.skillpoint {
		border: solid black 1px;
		background-color: coral;
		height: 16px;
		width: 16px;
	}
</style>
