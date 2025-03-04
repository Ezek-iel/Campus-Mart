<script lang="ts">
    import ProductCard from "../../shared/ProductCard.svelte";
    import SearchBar from "../../shared/SearchBar.svelte";
</script>

<div class="section container">
    <div class="box m-5"><SearchBar value="glass cubes" /></div>
    <div class="p-5">
        <p class="subtitle is-4"><strong>20</strong> results for glass cubes</p>
    </div>
    <div class="container">
        <div class="columns is-multiline">
            {#each [1, 2, 3, 4, 5] as _}
                <div class="column is-4">
                    <ProductCard />
                </div>
            {/each}
        </div>
    </div>
</div>
