function ProductRow({ product }) {
    const title = (product.stock > 50) ? product.title :
        <span style={{ color: 'red' }}>
            {product.title}
        </span>;

    return (
        <tr>
            <td>{title}</td>
            <td>{product.price}</td>
        </tr>
    );
}

export default ProductRow