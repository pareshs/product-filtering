function ProductRow({ product }) {
    return (
    <div className="row">
        <div className="col-3">
            <img src={product.posterUrl} alt={product.title} className="img-fluid"></img>
        </div>
        <div className="col-9">
            <h3>{product.title}</h3>
            <p class="item">{product.plot}</p>
            <ul class="items">
                <li class="item"> 
                    <span className="info-body">
                        {product.genres.map(item => <span class="badge text-bg-secondary">{item}</span>)}
                    </span>
                </li>
                <li class="item">
                    <span className="info-body">{product.year} {product.runtime} minutes</span>
                </li>
                <li class="item">
                    <span className="item-title">Director:</span>    
                    <span className="info-body">{product.director}</span>
                </li>
                <li class="item">
                    <span className="item-title">Actors:</span>    
                    <span className="info-body">{product.actors}</span>
                </li>
               
            </ul>
            

            

        </div>
    </div>

    );
}

export default ProductRow