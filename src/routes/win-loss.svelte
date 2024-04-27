<script>

  export let winCount = 0;
  export let loseCount = 0;

  $: winPercent = +(winCount/(winCount + loseCount)).toLocaleString() * 100
</script>

<div {...$$restProps}>
  <div class="flex flex-col h-36 gap-8 border-none">
    <p class="text-3xl underline text-center">WIN&nbsp/&nbspLOSS</p>
    <div class="flex justify-center text-3xl">
      <p class="text-green-400">
        {winCount}
      </p>
      <p class="">&nbsp/&nbsp</p>
      <p class="text-red-400">
        {loseCount}
      </p>
    </div>
    <div class="flex justify-center text-5xl text-green-400">
      {winPercent.toLocaleString()}%
    </div>
  </div>
</div>