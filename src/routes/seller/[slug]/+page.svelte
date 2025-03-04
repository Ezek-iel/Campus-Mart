<script lang="ts">
    import image from "../../../sample.jpg"
</script>

<section class="section">
    <div class="columns is-centered">
        <div class="column is-10">
            <div class="box my-2 mx-1">
                <div class="is-flex is-align-items-center is-gap-3">
                    <div class="">
                        <figure class="image is-128x128">
                            <img src={image} alt="rounded image" class="has-radius-rounded">
                        </figure>
                    </div>
                    <div class="">
                        <p class="title is-3">Neche's cosmetics</p>
                    </div>
                </div>
            </div>
    
            <div class="content p-4">
                <div class="content p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium in earum laudantium rem fugiat odio veniam voluptate quasi cum animi voluptas delectus accusantium itaque enim qui temporibus, consectetur blanditiis?
                </div>
    
                <hr>
                <div class="block mt-6">
                    <p class="title is-3 has-text-primary is-underlined">Products</p>
    
                    <div class="columns is-multiline">
                        {#each [1,2,3,4,5,6] as _}
                            <div class="column is-3">
                                <div class="card">
                                    <div class="card-content">
                                        <div class="content">
                                            <img src={image} alt="" class="is-clickable">
                                            <p>Glass cubes</p>
                                            <a href="/products/3" class="button is-fullwidth is-primary is-outlined"><strong>Get</strong></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
