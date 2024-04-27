<script lang="ts">
	import type { HTMLThAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLThAttributes;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<th
	class={cn(
		"h-12 px-2 text-center align-middle font-medium",
		className
	)}
	{...$$restProps}
>
	<slot />
</th>
