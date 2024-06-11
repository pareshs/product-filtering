import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable({ products }) {
    const productRows = [];
    let lastCategory = null;

    products.forEach((product) => {
        <h2>{product.genres[0]}</h2>
        if (product.genres[0] !== lastCategory) {
        productRows.push(
            <ProductCategoryRow
            category={product.genres[0]}
            key={product.genres[0]} />
        );
        }
        productRows.push(
        <ProductRow
            product={product}
            key={product.title} />
        );
        lastCategory = product.genres[0];
    })

    return (
        <>
            {productRows}
        </>
    )
}

export default ProductTable;