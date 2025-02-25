<script lang="ts">
    import {User, BadgeDollarSign} from 'lucide-svelte'
</script>

<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-desktop">
                    <div class="box">
                        <div class="notification is-success"><button class="delete" aria-label="delete"></button><p class="is-size-5 mx-2">Welcome to Campus Mart</p></div>
                        <br>
                        <form>
                            <div class="field">
                                <div class="control has-icons-right">
                                    <input type="text" class="input is-medium" placeholder="Seller's name">
                                    <span class="icon is-small is-right">
                                        <User/>
                                    </span>
                                    <p class="help is-small">What should we call you</p>
                                </div>
                            </div>
                            <br>
                            <div class="field">
                                <div class="control has-icons-right">
                                    <input type="text" class="input is-medium" placeholder="Slogan">
                                    <span class="icon is-small is-right">
                                        <BadgeDollarSign/>
                                    </span>
                                    <p class="help is-small">What's your slogan?</p>
                                </div>
                            </div>
                            <br>
                            <div class="field">
                                <div class="control">
                                    <!-- ! This should be a button and it should be disabled by default -->
                                    <a href="/products/create" class="button is-primary is-medium is-fullwidth is-disabled"><strong>Join</strong></a>
                                    <!-- ! -->
                                </div>
                            </div>
                        </form>
                        <p class="help is-danger mt-2">Please fill in something</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>