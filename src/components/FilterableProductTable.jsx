import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function FilterableProductTable({ products }) {
    return (
        <>
            <h2>Filterable Product Table</h2>
            <SearchBar />
            <ProductTable products={products}/>
        </>
    )
}

export default FilterableProductTable;