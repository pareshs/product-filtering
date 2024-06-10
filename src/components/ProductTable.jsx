import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable({ products }) {
    const productRows = [];
    let lastCategory = null;

    products.forEach((product) => {
        <h2>{product.category}</h2>
        if (product.category !== lastCategory) {
        productRows.push(
            <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
        }
        productRows.push(
        <ProductRow
            product={product}
            key={product.title} />
        );
        lastCategory = product.category;
    })

    return (
        <>
            {productRows}
        </>
    )
}

export default ProductTable;