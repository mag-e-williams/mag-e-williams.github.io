
var categories = [ 'decorative pillows', 'bed pillows', 'poufs' ]

var detail_page = "product_detail.html"

var products = [

    {
    'name': 'Basic Down Alternative Pillow', 
    'id': 1,
    'imgName' : 'image11.png', 
    'category': categories[1], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 85,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Luxe Down Alternative Pillow', 
    'id': 2,
    'imgName' : 'image13.png', 
    'category': categories[1], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 115,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Basic Down Pillow', 
    'id': 3,
    'imgName' : 'image15.png', 
    'category': categories[1], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 95,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Luxe Down Pillow', 
    'id': 4,
    'imgName' : 'image14.png', 
    'category': categories[1], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 125,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Synthetic Pillow', 
    'id': 5,
    'imgName' : 'image10.png', 
    'category': categories[1], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 125,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Metallic Embroidered Pillow', 
    'id': 6,
    'imgName' : 'image11-2.png', 
    'category': categories[0], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 75,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Tie-Dye Pillow', 
    'id': 7,
    'imgName' : 'image13-2.png', 
    'category': categories[0], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 65,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Earth Tones Patchwork Pillow', 
    'id': 8,
    'imgName' : 'image14-2.png', 
    'category': categories[0], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 65,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Corded Color Pillow', 
    'id': 9,
    'imgName' : 'image15-1.png', 
    'category': categories[0], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 80,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Velvet Cross Pillow', 
    'id': 10,
    'imgName' : 'image16.png', 
    'category': categories[0], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 85,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Corded Decorative Pillow', 
    'id': 11,
    'imgName' : 'image9-1.png', 
    'category': categories[0], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 65,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Velvet Round Floor Pouf', 
    'id': 12,
    'imgName' : 'image9.png', 
    'category': categories[2], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 215,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Velvet Square Floor Pouf', 
    'id': 13,
    'imgName' : 'image11-1.png', 
    'category': categories[2], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 245,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Sherpa Floor Pouf – Low', 
    'id': 14,
    'imgName' : 'image13-1.png', 
    'category': categories[2], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 245,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },
    {
    'name': 'Sherpa Floor Pouf – High', 
    'id': 15,
    'imgName' : 'image14-1.png', 
    'category': categories[2], 
    'description': "Something we can never get enough of? Va-va-velvet. Our Lush Velvet Pouf offers convenient, fashion-forward seating with a touch of glam.",
    'price': 275,
    'reviews': {
        'reviewer_fname': 'John',
        'reviewer_lname': 'Doe',
        'rating': 5,
        'review': 'I Love this item! it looks great in my home.',
        'review_date': '2015-03-25'
     }  
    },

]

var bestSellers = [ products[10], products[0], products[1], products[11] ]

var decorativePillows = products.filter(function(product) {
    return product.category == categories[0];
});

var bedPillows = products.filter(function(product) {
    return product.category == categories[1];
});

var poufs = products.filter(function(product) {
    return product.category == categories[2];
});


// function to create cards using template 
function createProductCards(cardData, sectionID){
    for (var i = 0; i < cardData.length; i++) {
        var card = cardData[i]
        var tmpl = document.getElementById('card-template').content.cloneNode(true);
        tmpl.querySelector('.name').innerText = card.name;
        tmpl.querySelector('.price').innerText = "$" + card.price.toString();
        tmpl.querySelector('.custom-card-img').src = "./assets/images/product_images/" + card.imgName;
        tmpl.querySelector('.product-link').href = "./product_pages/" + detail_page + "#" + card.id.toString();

        var cardList = document.getElementById(sectionID);

        cardList.appendChild(tmpl);
    }
}


// function to create product detail using template 
function createProductDetail(){
    var productID = window.location.toString().split("#")[1]
    var detailProduct = products.find(product => product.id == productID)

    document.getElementById("product_price").innerHTML = "$" + detailProduct.price
    document.getElementById("product_description").innerHTML = detailProduct.description
    document.getElementById("product_name").innerHTML = detailProduct.name

    var imgExt = '../assets/images/product_images/' + detailProduct.imgName
    var imgURL = "url(" + "\'" + imgExt + "\'" + ")"

    document.getElementById("product_img").style.backgroundImage = imgURL


}



function createCartItems(){
    var cartItems = shoppingCart.listCart();
    cartRows = "";

    for (var i = 0; i < cartItems.length; i++) {
        product = cartItems[i];
        productDetail = products.find(item => item.id == product.id);
        var formattedPrice = Number(productDetail.price).toFixed(2)
        cartRows 
            += "<tr>"

                + "<td class='cart-item-img'><img class='custom-cart-item-img' src='assets/images/product_images/" + productDetail.imgName + "' width='100' height='125' alt='pillows'></td>"
                + "<td class='cart-item-name' valign='top'><a href='./product_pages/" + detail_page + "#" + product.id + "'><h2>" + product.name + "</h2></a><p>$" + formattedPrice + "</p></td>" 
                + "<td class='cart-item-count' valign='top'><div class='input-group'><button class='minus-item input-group-addon' data-id=" + product.id + "><i class='material-icons'>remove</i></button>"
                    + "<input  class='item-count form-control' data-id='" + product.id + "' value='" + product.count + "'>"
                    + "<button class='plus-item input-group-addon' data-id=" + product.id + "><i class='material-icons'>add</i></button></div></td>"
                + "<td class='cart-item-total' valign='top'><p>$" + product.total + "</p></td>" 
                + "<td class='cart-item-clear' valign='top'><button class='delete-item clear-cart' data-id=" + product.id + "><i class='material-icons'>clear</i></button></td>"

            +  "</tr>";
    }

    $('.show-cart').html(cartRows);

    

}


var urlString = window.location;

function isIndexPage() {
    return urlString.toString().includes("index")
}

function isProductsPage() {
    return urlString.toString().includes("products")
}

function isCartPage() {
    return urlString.toString().includes("cart")
}

function isProductDetailPage() {
    return urlString.toString().includes("product_detail")
}

function renderPage() {
    if (isIndexPage()) {
        createProductCards(bestSellers, "bestsellers-cards")
    }

    if (isProductsPage()) {
        createProductCards(bedPillows, "bedPillow-cards")
        createProductCards(decorativePillows, "decorativePillow-cards")
        createProductCards(poufs, "pouf-cards")
    }

    if (isProductDetailPage()) {
        createProductDetail()
    }   

    displayCart();
}



var shoppingCart = (function() {
    cart = [];

    function Item(name, price, count, id) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.id = id;

    }

    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }

    var obj = {};

    obj.addItemToCart = function(id) {

        var productDetail = products.find(product => product.id == id)

        for(var item in cart) {
            if(cart[item].id === id) {
                cart[item].count ++;
                saveCart();
                return;
            }
        }
        var item = new Item(productDetail.name, productDetail.price, 1, productDetail.id);
        cart.push(item);
        saveCart();
    }

    obj.setCountForItem = function(id, count) {
        for(var i in cart) {
            if (cart[i].id === id) {
                cart[i].count = count;
                break;
            }
        }
    };

    obj.removeItemFromCart = function(id) {
        for(var item in cart) {
            if(cart[item].id === id) {
                cart[item].count --;
                if(cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    obj.removeItemFromCartAll = function(id) {
        for(var item in cart) {
            if(cart[item].id === id) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

    obj.totalCount = function() {
        var totalCount = 0;
        for(var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    obj.totalCart = function() {
        var totalCart = 0;
        for(var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    obj.listCart = function() {
        var cartCopy = [];
        for(i in cart) {
            item = cart[i];
            itemCopy = {};
            for(p in item) {
                itemCopy[p] = item[p];

          }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    return obj;
})();


function displayCart() {
    // cart nav badge
    document.getElementById("cart-amt").innerHTML = shoppingCart.totalCount();

    var formattedSubtotal = shoppingCart.totalCart().toFixed(2)
    var shipping = 7.50;

    if (shoppingCart.totalCart() == 0) {
        shipping = 0;
    }

    var formattedTotal = (shoppingCart.totalCart()+shipping).toFixed(2)


    if (isCartPage()) {
        document.getElementById("cart-subtotal").innerHTML = "$" + formattedSubtotal;
        document.getElementById("cart-shipping").innerHTML = "$" + shipping.toFixed(2);
        document.getElementById("cart-total").innerHTML = "$" + formattedTotal;
    
        createCartItems()
    }
}



$('.show-cart').on("click", ".delete-item", function(event) {
    console.log("delete");
    var id = $(this).data('id');
    console.log(id);
    shoppingCart.removeItemFromCartAll(id);
    displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
    console.log("minus");

    var id = $(this).data('id')
    shoppingCart.removeItemFromCart(id);
    displayCart();
})

// +1
$('.show-cart').on("click", ".plus-item", function(event) {
    console.log("plus");

    var id = $(this).data('id');

    shoppingCart.addItemToCart(id);
    displayCart();
})


$('.add-to-cart').click(function(event) {
    var productID = window.location.toString().split("#")[1]
    var detailProduct = products.find(product => product.id == productID)

    shoppingCart.addItemToCart(detailProduct.id);

    displayCart();
});


$('.clear-cart').click(function(event) {
    console.log("click");
    shoppingCart.clearCart();
    displayCart();
});



renderPage()







