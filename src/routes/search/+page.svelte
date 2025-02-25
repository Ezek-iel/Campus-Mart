<script lang="ts">
    import ProductCard from "../../shared/ProductCard.svelte";
    import SearchBar from "../../shared/SearchBar.svelte";
</script>

<div class="m-5"><SearchBar value="glass cubes"/></div>
<div class="p-3">
    <div class="notification has-background-primary-90">
        <button class="delete" aria-label='delete'></button>
        <p class="has-text-centered">You searched for <span class="has-text-weight-semibold"><a href="/">glass cubes</a></span></p>
    </div>
</div>
<div class="container">
    {#each [1, 2, 3, 4, 5] as _}
       <ProductCard/>
    {/each}
</div>
