<script >

    import "../app.pcss"

    export let data
    /** @type {import('./$types').ActionData}*/
    export let form

</script>


<div class="whole">
    <div class="headerbox">
        <img src="https://i.kym-cdn.com/entries/icons/original/000/024/523/sad.jpg" alt="balls" width=200px height=200px class="border-4 rounded-full">
        <p>Breakfast has been served</p>
        <p>@dotussy</p>
    </div>
    <div class="clickmaster">
        <div class="clickbox  mx-4">
            STATS
        </div>
        <div class="clickbox">
            REVIEWS
        </div>
    </div>
    <div class="flex justify-end mr-6">
        <button class="clickbox mr-0 font-semibold underline">Review!</button>
    </div>
    <div class="reviewbox">
        {#each data.reviews as review}
            <div class="ind-comment">
                <div class="flex justify-between pb-2">
                    <p class="text-xl font-semibold italic">{review.username}</p>
                    <p>{review.date}</p>
                </div>
                <p>{review.comment}</p>

                <div>
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
                </div>
            </div>
        {/each}
        
    </div>
    <div>
            <form method="POST" action="?/review"class="flex flex-col">

                <label>
                    {#if form?.missing}
                    <p>Username must be longer than 2 characters</p>
                    USERNAME:
                    <input name="username" type="username" class="badinput">
                    {:else}
                    USERNAME:
                    <input name="username" type="username" class="inputbox">
                    {/if}
                </label>

                <hr class="vorder-t-2 border-black w-500 my-8">

                <label>
                    {#if form?.missing2}
                    <p class="italic">Comment must be longer than 2 characters!</p>
                    COMMENT:
                    <input name="comment" type="comment" class="badinput">
                    {:else}
                    COMMENT:
                    <input name="comment" type="comment" class="inputbox">
                    {/if}
                </label>

                <button>Post Review!</button>

            </form>
        </div>
</div>


<style>
.whole{
    background-color: rgba(223, 203, 243, 0.341);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    border: 3px black solid;
    border-radius: 24px;
    padding: 32px;
    width: 100%;
    height: 100%;
    gap: 16px;

}
.headerbox{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: black 3px solid;
    border-radius: 24px;
    text-align: center;
}
.clickmaster{
    display: flex;
}
.clickbox{
    border: #000000 3px solid;
    border-radius: 10px;
    text-align: center;
    width: 150px;
    font-size: 20px;
}
.clickbox:hover{
    background-color: rgba(60, 255, 60, 0.821);
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
.inputbox{
    border: solid black 2px;
}
.badinput{
    border: solid red 2px;
}
</style>