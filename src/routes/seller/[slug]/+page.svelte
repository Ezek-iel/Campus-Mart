<script lang="ts">
    import image from "../../../shared/img.png";
</script>

<div class="container mt-5">
    <div
        class="is-flex is-align-items-center is-justify-content-center mb-5"
    >
    <!--! FIXME something's still wrong around here -->
        <figure class="image is-128x128">
            <img src={image} alt="" class="has-radius-rounded" />
        </figure>
        <div class="block ml-4">
            <p class="title is-2">Seller's name</p>
            <p class="subtitle is-5">Seller's slogan</p>
        </div>
    </div>
    <hr>
    <div class="block p-2">
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            natus repellat asperiores adipisci commodi animi id? Recusandae ad,
            velit debitis, non animi pariatur cupiditate fuga quibusdam
            voluptatibus commodi eius explicabo tenetur similique cum laboriosam
            minus numquam harum consequatur soluta ea delectus, consectetur vero
            in! Dignissimos excepturi obcaecati omnis nam ducimus.
        </p>
    </div>
    <hr>
    <div class="p-3">
        <p class="is-size-3 is-underlined mt-5">Products</p>
        <div class="columns is-multiline mt-2">
            {#each [1, 2, 3, 4, 5] as _}
                <div class="column is-3">
                    <figure class="image">
                        <img src={image} alt="" class="has-radius-large" />
                    </figure>
                </div>
            {/each}
        </div>
    </div>
</div>

