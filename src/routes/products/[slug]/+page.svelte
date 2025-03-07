<script lang="ts">

    import image from "../../../shared/img.png"
</script>

{#snippet productImage()}
    <div class="column">
        <figure class="image">
            <img src={image} alt="" class="has-radius-large">
        </figure>
    </div>
{/snippet}

<div class="container p-4">
    <div class="columns">
        <div class="column is-3 is-offset-3">
            <figure class="image my-5">
                <img src={image} alt="" class="has-radius-large -main-img">
            </figure>
        </div>
        <div class="column is-6 is-flex is-align-items-center">
            <div class="block">
                <p class="is-size-1 has-text-weight-bold">Product title</p>
                <p class="is-size-3 has-text-weight-semibold">Product subtitle</p>
                <p class="is-size-4 has-text-primary has-text-weight-bold">$30 000</p>
                <a href="/seller/3" class="is-underlined">Ezekiel's cosmetics</a>
            </div>
        </div>
    </div>
    <hr>
    <div class="block">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti mollitia vel sequi distinctio labore delectus in beatae libero exercitationem ipsam nulla vitae, omnis laborum est velit maxime perferendis modi minima tempore blanditiis quos debitis dolor! Pariatur, a blanditiis inventore, illo corporis fugiat aut facilis alias architecto nemo et, ad ipsam.</p>
    </div>
    <hr>
    <div class="mt-6">
        <p class=" is-size-4 is-underlined has-text-weight-semibold">More images</p>
        <div class="columns is-multiline mt-4">
            {#each [1,2,3,4,5] as _}
                {@render productImage()}
            {/each}
        </div>
    </div>
</div>

<style>
    .-main-img {
        background-color: red;
    }
</style>