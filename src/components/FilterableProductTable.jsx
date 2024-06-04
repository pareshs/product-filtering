function FilterableProductTable({products}){
    return(
    <>
    <h2>Filterable Product Table</h2>
    {products.forEach((product) => {
        <h2>product.category</h2>
    })}
    {products.map((product) => {
        {product.category}
        //alert(product);
    })}

    </>
    )
}

export default FilterableProductTable;