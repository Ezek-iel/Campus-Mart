<script lang='ts'>
    import image from '../../../sample.jpg';
    // import {BadgeDollarSign} from 'lucide-svelte' 
</script>

<!-- !XXX Need more inspiration for this page from pinterest -->

<div class="p-3">
    <figure class="image">
         <img src={image} class="has-radius-normal"/>
    </figure>
    <div class="block mt-3">
        <p class="title is-2 is-spaced">Glass Cubes</p>
        <p class="subtitle is-4 is-spaced">Very expensive glass cubes</p>
        <p class="title is-5 has-text-weight-semibold mt-2 is-spaced">$3000</p>
        <a href="/seller/3" class="is-underlined">Neche's Cosmetics</a>
    </div>
</div>