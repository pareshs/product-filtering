function ProductRow({ product }) {
    return (
    <div className="row">
        <div className="col-3">
            <img src={product.posterUrl} alt={product.title} className="img-fluid"></img>
        </div>
        <div className="col-9">
            <h3>{product.title}</h3>
            <ul class="items">
                <li class="item">
                    <span className="item-title">Release Year:</span>    
                    <span className="info-body">{product.year}</span>
                </li>
                <li class="item">
                    <span className="item-title">Runtime:</span>    
                    <span className="info-body">{product.runtime}</span>
                </li>
                <li class="item">
                    <span className="item-title">Genres:</span>    
                    <span className="info-body">{product.genres}</span>
                </li>
                <li class="item">
                    <span className="item-title">Director:</span>    
                    <span className="info-body">{product.director}</span>
                </li>
                <li class="item">
                    <span className="item-title">Actors:</span>    
                    <span className="info-body">{product.actors}</span>
                </li>
                <li class="item">
                    <span className="item-title">Plot:</span>    
                    <span className="info-body">{product.plot}</span>
                </li>
            </ul>
            

            

        </div>
    </div>

    );
}

export default ProductRow