<script lang="ts">
    import image from "../../shared/img.png";
    import type { PageProps } from "./$types";
    import type { Product } from "$lib";

    let { data }: PageProps = $props();

    $inspect(data);
</script>

<div class="container">
    <div class="columns is-centered mt-5">
        <div class="column is-8">
            <div class="field px-3">
                <div class="control">
                    <input
                        type="text"
                        class="input is-rounded is-medium"
                        value="Glass Cubes"
                        placeholder="Search for a product"
                    />
                </div>
            </div>
        </div>
    </div>

    <!--! XXX For things like this https://mockaroo.com will be better  -->

    {#snippet productCard(product: Product)}
        <div class="box mt-4">
            <div class="is-flex is-gap-4 is-flex-direction-column">
                <figure class="image">
                    <img src={image} alt="" class="has-radius-large" />
                </figure>
                <div>
                    <p class="is-size-2">{product.name}</p>
                    <p class="is-size-5">{product.description}</p>
                    <p class="is-size-6 has-text-weight-bold my-2">
                        ${product.price}
                    </p>
                    <a href="/seller/me"><strong>{product.images}</strong></a>
                </div>
                <div>
                    <a
                        href="/products/{product.id}"
                        class="button is-primary is-fullwidth">GET</a
                    >
                </div>
            </div>
        </div>
    {/snippet}

    <div class="p-3">
            <div class="columns is-multiline">
                {#each data.products as product}
                    <div class="column is-4">
                        {@render productCard(product)}
                    </div>
                {/each}
            </div>
    </div>
</div>
