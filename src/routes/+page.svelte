<section class="hero is-halfheight">
    <div class="hero-body">
        <div class="container">
            <p class="title is-2 has-text-centered">Campus Mart <span class="tag is-warning">ALPHA</span>
</p>
            <!--* Using c-8 to constrain the entire size -->
            <div class="columns is-centered">
                <div class="column is-8">
                    <div>
                        <div class="field">
                            <div class="control">
                                <input type="text" class="input is-rounded is-medium" placeholder="Search for a product">
                            </div>
                        </div>
                        <!--? Is this even neccesary -->
                        {#if false}
                        <div class="column is-1"><button class="button is-primary is-rounded"><strong>Search</strong></button></div>
                        {/if}
                        <p class="help is-small has-text-right">Powered by <a href="/search">SvelteKit</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
