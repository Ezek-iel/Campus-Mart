<script lang="ts">
    import { Box, CircleDollarSign } from "lucide-svelte";
</script>

<section class="hero is-halfheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-7 box p-5">
                    <p class="title is-2 has-text-primary">Add a Product</p>
                    <div class="block">
                        <div class="field">
                            <div class="control has-icons-left">
                                <input
                                    type="text"
                                    class="input is-medium"
                                    placeholder="Name"
                                />
                                <span class="icon is-small is-left">
                                    <Box />
                                </span>
                                <p class="help is-small">Product Name</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="block">
                        <div class="field">
                            <div class="control has-icons-left">
                                <input
                                    type="number"
                                    class="input is-medium"
                                    placeholder="Price"
                                />
                                <span class="icon is-small is-left">
                                    <CircleDollarSign />
                                </span>
                                <p class="help is-small">Product Price</p>
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <textarea name="" id="" class="textarea"> </textarea>
                        <p class="help is-small">Product Description</p>
                    </div>
                    <br />
                    <div class="block">
                        <div
                            class="box is-shadowless has-background-primary-80"
                        >
                            {#each [1, 2, 3] as _, i}
                                <p class="is-size-6">image.jpg</p>
                                {#if i != 2}
                                    <hr />
                                {/if}
                            {/each}
                            <button
                                class="button is-primary is-outlined is-fullwidth mt-5"
                                >Add an Image</button
                            >
                        </div>
                    </div>
                    <a
                        href="/seller/3"
                        class="button is-primary is-medium is-fullwidth mt-6"
                        ><strong>Submit</strong></a
                    >
                </div>
            </div>
        </div>
    </div>
</section>
