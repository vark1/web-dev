function fetchProducts(done){ //Sends a get request to /api/products and returns an array of products each of being a json object
    $.get('/api/products',function(data){
        done(data)
    })
}

function addProduct (name, manuf, price, done){
    $.post('/api/products',{
        name: name,
        manufacturer: manuf,
        price: price
    },function(data){
        done(data)
    })
}

function createProductCard(product){ //Takes a product object and returns how the product card is going to look like
    return $(`  
                <div class="col-4 card mx-2 p-2">
                    <h4 class="product-name">${product.name}</h4>
                    <div class="product-manufacturer">${product.manufacturer}</div>
                    <div class="row">
                        <div class="col m-3 p-1">
                            <b>Rs.${product.price}</b>
                        </div>
                    <button class="col btn btn-primary m-3 p-3">Buy</button>
                    </div>
                </div>`
            )
}