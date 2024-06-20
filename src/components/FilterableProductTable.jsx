import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function FilterableProductTable({ products }) {
    return (
        <>
            <div className="container">
                <h2>Filterable Product Table</h2>
                <SearchBar />
                <ProductTable products={products}/>
            </div>
        </>
    )
}

export default FilterableProductTable;