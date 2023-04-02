<script lang="ts">
    import { currentIndex } from "$lib/stores";

    function decrement() {
        if ($currentIndex > 0 ) {
            currentIndex.update((i:number) => i = i - 1);
        }
    }

</script>

<button on:click={decrement}>Previous</button>

<style>

</style>