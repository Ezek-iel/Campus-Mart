<script lang="ts">
    import image from "../../shared/img.png";
</script>

<div class="container">
    <div class="columns is-centered mt-5">
        <div class="column is-8">
            <div class="field px-3">
                <div class="control">
                    <input type="text" class="input is-rounded is-medium" value="Glass Cubes" placeholder="Search for a product"/>
                </div>
            </div>
        </div>
    </div>

    {#snippet productCard()}
        <div class="box mt-4">
            <div class="is-flex is-gap-4 is-flex-direction-column">
                <figure class="image">
                    <img src={image} alt="" class="has-radius-large" />
                </figure>
                <div>
                    <p class="is-size-2">Product title</p>
                    <p class="is-size-5">Product subtitle</p>
                    <p class="is-size-6 has-text-weight-bold my-2">$30 000</p>
                    <a href="/seller/3"><strong>Seller</strong></a>
                </div>
                <div>
                    <a href="/verify" class="button is-primary is-fullwidth"
                        >GET</a
                    >
                </div>
            </div>
        </div>
    {/snippet}

    <div class="p-3">
        <div class="columns is-multiline">
            {#each [1, 2, 3, 4, 5] as _}
                <div class="column is-4">
                    {@render productCard()}
                </div>
            {/each}
        </div>
    </div>
</div>
