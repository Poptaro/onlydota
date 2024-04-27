<script lang='ts'>
    export let topThree: any[] = []



</script>

<div {...$$restProps}>
    <p class="text-3xl mb-4 ml-2">Most Played Heroes</p>
    {#each topThree as hero}
        <div class="flex justify-between ml-8">
            <div class="flex flex-row items-center gap-4 p-1">
                <div class="flex justify-center items-center h-12 w-16 border-solid rounded-sm hover:scale-150 overflow-hidden">
                    <img src={`https://cdn.cloudflare.steamstatic.com${hero.img}`} alt={hero.name} class="text-center h-12">
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex h-12 w-52 max-w-80 items-center">
                        <p class="indent-0 text-2xl text-black">{hero.name}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-green-500 w-32">Wins: {hero.wins}</p>
                        <p class="text-red-500">Losses: {(hero.total - hero.wins)}</p>
                    </div>
                </div>
            </div>
            <div class="flex items-center">
                <p class="mr-8">Total Games: {hero.total}</p>
                <p class="text-green-500">{((+(hero.wins/hero.total).toLocaleString() * 100))}%</p>
            </div>
        </div>
    {/each}
</div>