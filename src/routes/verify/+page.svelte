<script lang="ts">
    import {validateCredentials} from "$lib";

    let emailAddress = $state('');
    let matriculationNumber = $state('');
    
    let response = $derived(validateCredentials(matriculationNumber, emailAddress));
</script>

<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-4">
                    <div class="box py-5">
                        <div class="notification">
                            We need to verify that you are a member of the C.U. community first
                        </div>
                        <form action="">
                            <div class="field">
                                <div class="control">
                                    <input type="text" class="input is-fullwidth is-medium" id="email" placeholder="Email Address" bind:value={emailAddress}>
                                    <label for="email" class="help mt-2">School Email Address</label>
                                </div>
                            </div>
                            <br>
                            <div class="field">
                                <div class="control">
                                    <input type="text" class="input is-fullwidth is-medium" id="matric" placeholder="Matriculation Number" bind:value={matriculationNumber}>
                                    <label for="matric" class="help mt-2">Matriculation Number</label>
                                </div>
                            </div>
                            {#if !(response.isValid)}
                                    <div class="block"><strong class="has-text-danger">{response.message}</strong></div>
                            {/if}
                            <div class="field">
                                <div class="control">
                                    <button class="button is-fullwidth is-primary is-medium" disabled={!response.isValid}>Verify</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
