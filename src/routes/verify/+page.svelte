<script lang="ts">
    import { Mail, School, InfoIcon } from "lucide-svelte";
    import validateStudentCredentials from "$lib/utils";

    let emailAddress: string = $state("");
    let matriculationNumber: string = $state("");

    let response = $derived(validateStudentCredentials(emailAddress, matriculationNumber))
</script>

<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-desktop">
                    <div class="box">
                        <div class="notification is-info">
                            <div class="is-flex is-align-items-center">
                                <InfoIcon/>
                                <p class="is-size-7 mx-2 has-text-weight-semibold">
                                    We need to verify that you are a student of C.U.
                                    first
                                </p>
                            </div>
                        </div>
                        <br />
                        <form>
                            <div class="field">
                                <div class="control has-icons-right">
                                    <input
                                        type="text"
                                        class="input is-medium"
                                        placeholder="School Email"
                                        bind:value={emailAddress}
                                    />
                                    <span class="icon is-small is-right">
                                        <Mail />
                                    </span>
                                    <p class="help is-small">School email</p>
                                </div>
                            </div>
                            <br />
                            <div class="field">
                                <div class="control has-icons-right">
                                    <input
                                        type="text"
                                        class="input is-medium"
                                        placeholder="Matric No"
                                        bind:value={matriculationNumber}
                                    />
                                    <span class="icon is-small is-right">
                                        <School />
                                    </span>
                                    <p class="help is-small">
                                        Matriculation Number
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div class="field">
                                <div class="control">
                                    <!--! TODO This should be a button and it should be disabled by default -->
                                    <button
                                        class="button is-primary is-medium is-fullwidth" 
                                        disabled={!response.isValid}
                                        ><strong>Verify</strong></button
                                    >
                                    <!-- ! -->
                                </div>
                            </div>
                        </form>
                        {#if response.error}
                        <div class="notification is-danger mt-3">
                            <p class="is-size-7"><strong>{response.error}</strong></p>
                        </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
