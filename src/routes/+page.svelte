<script lang="ts">
    import { Search, ShoppingCart } from "lucide-svelte";
</script>

<section class="hero is-halfheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-7">
                    <p
                        class="title is-2 has-text-weight-semibold has-text-centered"
                    >
                        Campus Mart  <span class="tag is-warning is-medium"
                            ><strong>ALPHA</strong></span
                        >
                    </p>
                    <div class="field">
                        <div class="control has-icons-right">
                            <input
                                type="text"
                                class="input is-rounded is-medium"
                                placeholder="Search for a product"
                            />
                            <span class="icon is-small is-right">
                                <Search />
                            </span>
                        </div>
                    </div>
                    <p class="help is-small has-text-right">
                        Powered by <a href="/search">Sveltekit</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
