<script>
    export let data;
    const products=data.data
</script>

<slot/>
{#each products as product}
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <hr/>
    </div>
{/each}