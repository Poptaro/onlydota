<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLTableRowElement> & {
		"data-state"?: unknown;
	};

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<tr
	class={cn(
		"border-b-2 transition-colors border-slate-500/50",
		className
	)}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</tr>
