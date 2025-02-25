<script lang="ts">
    import {Mail, School} from 'lucide-svelte'
</script>

<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-desktop">
                    <div class="box">
                        <div class="notification is-info"><button class="delete" aria-label="delete"></button><p class="is-size-7 mx-2"> We need to verify that you are a student of C.U. first</p></div>
                        <br>
                        <form>
                            <div class="field">
                                <div class="control has-icons-right">
                                    <input type="text" class="input is-medium" placeholder="School Email">
                                    <span class="icon is-small is-right">
                                        <Mail/>
                                    </span>
                                    <p class="help is-small">School email</p>
                                </div>
                            </div>
                            <br>
                            <div class="field">
                                <div class="control has-icons-right">
                                    <input type="text" class="input is-medium" placeholder="Matric No">
                                    <span class="icon is-small is-right">
                                        <School/>
                                    </span>
                                    <p class="help is-small">Matriculation Number</p>
                                </div>
                            </div>
                            <br>
                            <div class="field">
                                <div class="control">
                                    <!-- ! This should be a button and it should be disabled by default -->
                                    <a href="/seller/create" class="button is-primary is-medium is-fullwidth is-disabled"><strong>Verify</strong></a>
                                    <!-- ! -->
                                </div>
                            </div>
                        </form>
                        <p class="help is-danger mt-2">Please fill in something</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>