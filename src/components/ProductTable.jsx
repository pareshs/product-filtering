import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable({ products }) {
    const productRows = [];

    products.forEach((product) => {
        productRows.push(
        <ProductRow
            product={product}
            key={product.title} />
        );
    })

    return (
        <>
            {productRows}
        </>
    )
}

export default ProductTable;