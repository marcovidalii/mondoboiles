<script lang="ts">
    export let immagine: string;
    export let titolo: string;
    export let descrizione: string;
</script>

<div class="card bg-base-100 shadow-xl w-[90vw] sm:w-[80vw] md:w-80">
    <figure>
        <img src={immagine} alt="Boiles" />
    </figure>
    <div class="card-body">
        <h2 class="card-title responsive-text-xl">{titolo}</h2>
        <p class="responsive-text-base">
            {descrizione}
        </p>
    </div>
</div>
