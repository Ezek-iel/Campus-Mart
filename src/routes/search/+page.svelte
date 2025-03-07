<script lang="ts">
    import image from "../../shared/img.png";
    import type {PageProps} from "./$types"
    import type {Seller} from "$lib"

    let {data}: PageProps = $props();

    $inspect(data);
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

    <!--! XXX For things like this https://mockaroo.com will be better  -->

    {#snippet productCard(seller: Seller)}
        <div class="box mt-4">
            <div class="is-flex is-gap-4 is-flex-direction-column">
                <figure class="image">
                    <img src={image} alt="" class="has-radius-large" />
                </figure>
                <div>
                    <p class="is-size-2">{seller.name}</p>
                    <p class="is-size-5">{seller.description}</p>
                    <p class="is-size-6 has-text-weight-bold my-2">$30 000</p>
                    <a href="/seller/{seller.id}"><strong>{seller.email}</strong></a>
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
            {#each data.sellers as seller}
                <div class="column is-4">
                    {@render productCard(seller)}
                </div>
            {/each}
        </div>
    </div>
</div>
