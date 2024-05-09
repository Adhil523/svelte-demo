<script>
    export let data;
    const product=data.data
</script>

<h1>
    Product Details
</h1>
<h2>
    {product.title} : {product.price}
</h2>
<p>{product.description}</p>