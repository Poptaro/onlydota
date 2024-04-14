<script>

    import "../app.pcss"
    import { Toaster } from "$lib/components/ui/sonner";
    // import { toast } from "svelte-sonner";
    import { enhance } from "$app/forms"
    import { Button } from "$lib/components/ui/button"
    import { Input } from "$lib/components/ui/input"
    import { Label } from "$lib/components/ui/label"
    import { ScrollArea } from "$lib/components/ui/scroll-area/index"
    import * as Tabs from "$lib/components/ui/tabs"
    import * as Dialog from "$lib/components/ui/dialog"

    import gliu from "$lib/img/gliu.png"

    

    export let data
    const user = data.userProfileData.profile
    /** @type {import('./$types').ActionData}*/
    export let form

    // @ts-ignore
    let dialogOpen = false

    let commented = ''
    function clearComment() {
        commented = ''
    }


    //change the disable statets of the Stats / Review Buttons --  and Review me Button
    let isDisabled = true
    let statReview = false
    function toggleDisable() {
        isDisabled = !isDisabled
        statReview = !statReview
    }

    let winPercent = +(data.userWinLossData.win/(data.userWinLossData.win + data.userWinLossData.lose)).toLocaleString() * 100

</script>

<Toaster closeButton richColors theme="light"/>
<div class="whole">
    <div class="headerbox">
        <img src={gliu} alt="BHBS" width=200px height=200px class="border-4 rounded-full w-48 h-48">
        <a href={user.profileurl}><p class="text-3xl">{user.personaname}</p></a>
        <p class="text-xl">Rokusho || Poptaro</p>
    </div>
    <!-- <div class="clickmaster">
        <div class="mx-4">
            <Button class="w-36 hover:bg-purple-300 hover:text-black" on:click={() => toast.error("stats button not ready yet")}>STATS</Button>
        </div>
        <div>
            <Button class="w-36 hover:bg-purple-300 hover:text-black" on:click={() => toast.error("reviews button not ready yet")}>REVIEWS</Button>
        </div>
    </div> -->
    



    <!-- <div class="flex justify-end mr-6">
        <Button class="mr-0 font-semibold underline w-36 hover:bg-purple-300 hover:text-black">Review!</Button>
    </div> -->

    <Tabs.Root value="stats" class="">
        <div class="flex">
            <Tabs.List class="bg-black ml-6">
                <Tabs.Trigger value="stats" disabled={isDisabled} on:click={toggleDisable} class="w-36 text-white hover:bg-purple-300 hover:text-black rounded-r-none">Stats</Tabs.Trigger>
                <Tabs.Trigger value="reviews" disabled={statReview} on:click={toggleDisable} class="w-36 text-white hover:bg-purple-300 hover:text-black rounded-l-none">Reviews</Tabs.Trigger>
            </Tabs.List>
        </div>


        <div class="flex justify-end mr-6">
            <Dialog.Root bind:open={dialogOpen}>
                <Dialog.Trigger disabled={isDisabled}><Button disabled={isDisabled} class="w-36 hover:bg-purple-300 hover:text-black mb-2">Review me</Button></Dialog.Trigger>
                <Dialog.Content class="sm:max-w-[600px] bg-purple-100">
                    <Dialog.Header>
                        <Dialog.Title>Submit a review against <strong class="text-xl">Breakfast has been served</strong></Dialog.Title>
                    </Dialog.Header>
    
                    <div class="flex flex-row">
                        <form use:enhance on:submit={clearComment} method="POST" action="/?/review" class="flex flex-col">
                            <div class="flex items-center gap-12">
                                <Label for="username">
                                    <Input 
                                        id="username" 
                                        name="username" 
                                        type="text" 
                                        minlength={2} 
                                        maxlength={20} 
                                        class="w-72 border-2 border-black invalid:border-pink-500" 
                                        placeholder="USERNAME"
                                        required
                                        />
                                </Label>
    
                                <!-- <Label for="attitude">
                                    <input type="number" value="0"/>
                                </Label> -->
                            </div>
    
                            <hr class="border-t-2 border-black my-8 w-72">
                                <Label for="comment">
                                    <textarea bind:value={commented} placeholder="COMMENT (optional)"class="w-72 border-2 border-black h-72 rounded-md bg-purple-100 px-3 py-2"/>
                                    <Input 
                                        id="comment" 
                                        name="comment" 
                                        type="text" 
                                        bind:value={commented} 
                                        minlength={2}
                                        maxlength={169} 
                                        class="w-72 border-2 border-black h-72 hidden" 
                                        placeholder="COMMENT"
                                        />
                                </Label>
    
                            <div class="flex justify-center">
                                <Button type="submit" class="w-40 hover:bg-purple-300 hover:text-black">Post Review</Button>
                            </div>
                        </form>
                    </div>
    
                </Dialog.Content>
            </Dialog.Root>
        </div>

        <Tabs.Content value="stats">
            <div class="flex flex-col">
                <div class="flex h-[280px] gap-4">
                    <div class="flex flex-row justify-center basis-1/3 border-4 border-solid h-64 w-64 border-black rounded-3xl p-4">
                        <div class="flex flex-col h-36 gap-8 border-none">
                            <p class="text-2xl underline text-center">WIN&nbsp/&nbspLOSS</p>
                            <div class="flex justify-center text-3xl">
                                <p class="text-green-400">{data.userWinLossData.win}</p>
                                <p class="">&nbsp/&nbsp</p>
                                <p class="text-red-400">{data.userWinLossData.lose}</p>
                            </div>
                            <div class="flex justify-center text-3xl">
                                {winPercent.toLocaleString()}%
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col basis-2/3 border-4 border-solid h-64 w-84 border-black rounded-3xl p-4">
                        <p class="text-2xl">Most Played Heroes</p>
                        {#each data.hero as hero}
                            <div class="flex flex-row items-center gap-4 p-1">
                                <div class="rounded-full h-12 w-12 border-solid border-black border-4"/>
                                <p>{hero.name}</p>
                                <p class="text-green-500">Wins: {hero.wins}</p>
                                <p class="text-red-500">Losses: {hero.losses}</p>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="flex flex-col justify-around border-4 border-solid h-64 w-128 border-black rounded-3xl p-4">
                    <div class="flex">
                        ßssss
                    </div>
                    <div>
                        sefasdf
                    </div>
                </div>
            </div>
        </Tabs.Content>

        <Tabs.Content value="reviews">
            <ScrollArea class="flex flex-col gap-1 h-[560px] border-4 border-black rounded-3xl">
                <div>
                    {#each data.reviews as review}
                        <div class="ind-comment">
                            <div class="flex justify-between pb-2">
                                <p class="text-xl font-semibold italic">{review.username}</p>
                                <p>{review.date}</p>
                            </div>
                            <p>{review.comment}</p>
            
                            <!-- <div>
                                <p>Impact</p>
                                <ul class="skillpoint-box">
                                    <li class="skillpoint"/>
                                    <li class="skillpoint"/>
                                    <li class="skillpoint"/>
                                </ul>
                            </div>
                            <div>
                                <p>Skill</p>
                                <ul class="skillpoint-box">
                                    <li class="skillpoint"/>
                                    <li class="skillpoint"/>
                                    <li class="skillpoint"/>
                                    <li class="skillpoint"/>
                                    <li class="skillpoint"/>
                                </ul>
                            </div> -->
                        </div>
                    {/each}
                </div>
            </ScrollArea>
          </Tabs.Content>
    </Tabs.Root>

   
    
</div>


<style>
    :global(body, html){
        background-color: black;
        height: 100%;
    }
    textarea {
        resize: none;
    }
.whole{
    background-color: ghostwhite;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    border: 3px black solid;
    border-radius: 24px;
    overflow: hidden;
    padding: 32px;
    width: 100%;
    max-height: 100%;
    height: 100%;
    gap: 16px;

}
.headerbox{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: black 4px solid;
    border-radius: 24px;
    text-align: center;
    padding: 8px;
}
.reviewbox{
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 5px;
    border: black 3px solid;
    border-radius: 24px;
}
.ind-comment{
    border-bottom: solid black 3px;
    margin: 16px;
}
.skillpoint-box{
    display: flex;
    flex-wrap: nowrap;
    gap: 4px;
    margin-bottom: 4px;
}
.skillpoint{
    border: solid black 1px;
    background-color: coral;
    height: 16px;
    width: 16px;
}
</style>