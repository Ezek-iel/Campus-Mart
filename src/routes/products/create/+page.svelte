<section class="section">
    <div class="columns is-centered">
        <div class="column is-6">
            <p class="title is-2">Add a product</p>
            <div class="field">
                <div class="control">
                    <input
                        type="text"
                        class="input"
                        placeholder="Title"
                        id="title"
                    />
                    <label for="title" class="help">Product Title</label>
                </div>
            </div>

            <br />

            <div class="field">
                <div class="control">
                    <input
                        type="number"
                        class="input"
                        placeholder="Price"
                        id="price"
                    />
                    <label for="price" class="help">Product Price</label>
                </div>
            </div>

            <br />

            <div class="field">
                <div class="control">
                    <textarea name="" id="description" class="textarea"></textarea>
                    <label for="description" class="help">Product description</label>
                </div>
            </div>

            <br />

            <div class="box">
                {#each [1, 2, 3, 4, 5] as _, index}
                    {#if index != 0}<hr />{/if}
                    <p>Filename.ext</p>
                {/each}
                <button class="button is-info is-outlined mt-5 is-fullwidth"
                    >Add Image</button
                >
            </div>

            <a class="button is-medium is-fullwidth is-primary" href="/"
                >Submit</a
            >
        </div>
    </div>
</section>

<style>
    textarea.textarea {
        field-sizing: content;
    }
</style>
