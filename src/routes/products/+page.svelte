<script>
    export let data;
    const products=data.data
</script>
<h1>List of Products</h1>
{#each products as product}
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <hr/>
    </div>
{/each}