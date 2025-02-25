<script lang="ts">
    import image from "../../../sample.jpg"
</script>

<div class="box is-shadowless has-background-primary-80 my-2 mx-1">
    <div class="is-flex is-justify-content-center is-align-items-center is-gap-3">
        <div class="">
            <figure class="image is-96x96">
                <img src={image} alt="rounded image" class="has-radius-rounded">
            </figure>
        </div>
        <div class="">
            <p class="title is-3">Neche's cosmetics</p>
        </div>
    </div>
</div>

<div class="content p-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium in earum laudantium rem fugiat odio veniam voluptate quasi cum animi voluptas delectus accusantium itaque enim qui temporibus, consectetur blanditiis?

    <div class="block mt-6">
        <p class="title is-5 has-text-primary is-underlined">Products</p>
        
        <div class="grid has-2-cols mobile">
            {#each [1,2,3,4,5,6] as _}
                <div class="col">
                    <img src={image} alt="" class="is-clickable">
                    <p>Glass cubes</p>
                </div>
            {/each}
        </div>
    </div>
</div>
