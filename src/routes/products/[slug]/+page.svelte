<script lang='ts'>
    import image from '../../../sample.jpg'
</script>

<!-- ! There should be a carousel at some point here -->
<figure><img src={image} alt="some image"></figure>
<!-- ! -->

<div class="p-3">
    <div class="block">
        <p class="title is-2 mt-3">Glass Cubes</p>
        <p class="subtitle is-6 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet delectus rerum, quas possimus fugiat consectetur consequuntur vel laboriosam ratione commodi, rem id explicabo! Porro, nam! Illum nostrum temporibus ab. <a href="/verify" class="button is-primary">Get</a></p>
    </div>

    <div class="block">
        <p class="title is-4 has-text-primary-30 is-underlined">Gallery</p>
        <div class="columns is-multiline">
            {#each [1,2,3,4,5,6,7,8,9,10] as product}
                <div class="column p-4"><img src={image}></div>
            {/each}
        </div>
    </div>
</div>

