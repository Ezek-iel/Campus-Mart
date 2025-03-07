<script>
    import {page} from "$app/state"
</script>

<section class="hero is-fullheight is-danger">
    <div class="hero-body">
        <div class="container has-text-centered">
            <p class="title is-1">oops!!!</p>
            <p class="subtitle is-4 mt-2"><strong>{page.status}</strong> {page.error?.message}</p>
            <a href="/" class="button">Go home</a>
        </div>
    </div>
</section>