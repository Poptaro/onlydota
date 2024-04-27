<script lang="ts">
    //@ts-nocheck
    import * as Table from "$lib/components/ui/table"


    export let recentMatches: any[] = []

</script>


<div {...$$restProps}>
    <Table.Root>
        <Table.Header>
            <Table.Row>
                <Table.Head class="w-[100px]">Match ID</Table.Head>
                <Table.Head class="w-[75px]">(imng)</Table.Head>
                <Table.Head class="w-[75px]">Kills</Table.Head>
                <Table.Head class="w-[75px]">Deaths</Table.Head>
                <Table.Head class="w-[75px]">Assists</Table.Head>
                <Table.Head class="w-[75px]">Last Hits</Table.Head>
                <Table.Head class="w-[75px]">Denies</Table.Head>
                <Table.Head class="w-[75px]">Damage</Table.Head>
                <Table.Head class="w-[75px]">Net Worth</Table.Head>
                <Table.Head class="w-[25px]"></Table.Head>
                <Table.Head class="w-[350px]">Items</Table.Head>
                <Table.Head class="w-[25px]"></Table.Head>
    
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {#each recentMatches as match}
                <Table.Row class={match.win}>
                    <Table.Cell class="text-black">
                        <a href={`https://www.opendota.com/matches/${match.match_id}`}>{match.match_id}</a>
                    </Table.Cell>
                    <Table.Cell class="flex content-center justify-center">
                            <img 
                                src={`https://cdn.cloudflare.steamstatic.com${match.hero_image}`} 
                                alt={match.hero_name}
                                class="w-16 h-12 object-fill rounded-sm hover:scale-150"
                                >
                    </Table.Cell>
                    <Table.Cell class="text-green-500">{match.kills}</Table.Cell>
                    <Table.Cell class="text-red-600">{match.deaths}</Table.Cell>
                    <Table.Cell class="text-blue-400">{match.assists}</Table.Cell>
                    <Table.Cell class="text-black">{match.last_hits}</Table.Cell>
                    <Table.Cell class="text-black">{match.denies}</Table.Cell>
                    <Table.Cell class="text-red-600">{match.damage}</Table.Cell>
                    <Table.Cell class="text-fuchsia-500">{match.net_worth}</Table.Cell>
                    <Table.Cell class=""></Table.Cell>
                    <Table.Cell class="flex flex-row gap-2 justify-evenly">
                        {#each Object.entries(match.items) as [key, value]}
                            <div class="flex items-center content-center">
                                {#if value !== undefined}
                                    <div class="border-solid border-2 h-8 w-8">
                                        <img 
                                            src={value.image} 
                                            alt={value.name}
                                            class="w-8 h-8">
                                    </div>
                                {/if}
                            </div>
                        {/each}
                    </Table.Cell>
                    <Table.Cell class=""></Table.Cell>
                </Table.Row>
            {/each}
        </Table.Body>
    </Table.Root>
</div>
