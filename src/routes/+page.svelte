<script lang="ts">
    import Card from "../lib/Card.svelte";
</script>

<div
    class="bg-[url('/immagini/onde.svg')] bg-cover justify-center flex flex-col"
>
    <h1
        class="font-gilroy-heavy text-white responsive-text-8xl text-center mt-12"
    >
        Mondo Boiles
    </h1>
    <div class="flex justify-center mb-12 mt-12">
        <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-12">
            <Card
                immagine="/immagini/boiles-1.jpeg"
                titolo="Boiles Moena Top One"
                descrizione="La qualità si vede dalla cattura."
            />
            <Card
                immagine="/immagini/boiles-2.jpeg"
                titolo="Boiles Moena Top Two"
                descrizione="Boiles a 360 gradi."
            />
            <Card
                immagine="/immagini/boiles-3.jpg"
                titolo="Boiles Moena Top Three"
                descrizione="Al top per pescate veloci."
            />
            <Card
                immagine="/immagini/boiles-4.jpeg"
                titolo="Boiles Moena Top Four"
                descrizione="Per stanare le carpe più diffidenti."
            />
            <Card
                immagine="/immagini/boiles-5.jpeg"
                titolo="Boiles Moena Top Five"
                descrizione="Non ti tradirà mai."
            />
        </div>
    </div>
</div>
