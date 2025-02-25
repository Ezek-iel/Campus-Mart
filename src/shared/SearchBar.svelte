<script lang="ts">
    import {Search} from "lucide-svelte"

    let props = $props();
</script>

<div class="field">
    <div class="control has-icons-right">
        <input
            type="text"
            class="input is-rounded"
            placeholder="Search for a product"
            value={props.value}
        />
        <span class="icon is-small is-right">
            <Search/>
        </span>
    </div>
</div>