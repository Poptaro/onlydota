<script>
	import '../../app.pcss';
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index';
	import * as Dialog from '$lib/components/ui/dialog';

	export let data;
    	/** @type {import('./$types').ActionData}*/
	export let form;

	// @ts-ignore
	let dialogOpen = false;

	let commented = '';
	function clearComment() {
		commented = '';
        dialogOpen = !dialogOpen
	}
</script>

<div>
	<div class="flex justify-end mr-6">
		<Dialog.Root bind:open={dialogOpen}>
			<Dialog.Trigger>
                <Button class="w-36 hover:bg-purple-300 hover:text-black">Review me</Button>
            </Dialog.Trigger>
			

			
			<Dialog.Content class="sm:max-w-[600px] bg-purple-100 border-solid border-black border-4">
				<Dialog.Header>
					<Dialog.Title class="text-xl">
                        Submit a review against <strong class="text-xl">Breakfast has been served</strong>
                    </Dialog.Title>
				</Dialog.Header>

				<div class="flex flex-row">
					<form
						use:enhance
						on:submit={clearComment}
						method="POST"
						action="?/review"
						class="flex flex-col"
					>
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

						<hr class="border-t-2 border-black my-8 w-72" />
						<Label for="comment">
							<textarea
								bind:value={commented}
								placeholder="COMMENT (optional)"
								class="w-72 border-2 border-black h-72 rounded-md bg-purple-100 px-3 py-2"
							/>
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
							<Button type="submit" class="w-40 hover:bg-purple-300 hover:text-black"
								>Post Review</Button
							>
						</div>
					</form>
				</div>

			</Dialog.Content>
		</Dialog.Root>
	</div>
</div>
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

<style>
	:global(body, html) {
		background-color: black;
		height: 100%;
	}

	.ind-comment {
		border-bottom: solid black 3px;
		margin: 16px;
	}

	textarea {
		resize: none;
	}
</style>
