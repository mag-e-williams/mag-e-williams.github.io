
var categories = [ 'decorative pillows', 'bed pillows', 'poufs' ]

var detail_page = "product_detail.html"

var products = [

    {
    'name': 'Basic Down Alternative Pillow', 
    'product_id': 1,
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
    'product_id': 2,
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
    'product_id': 3,
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
    'product_id': 4,
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
    'product_id': 5,
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
    'product_id': 6,
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
    'product_id': 7,
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
    'product_id': 8,
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
    'product_id': 9,
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
    'product_id': 10,
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
    'product_id': 11,
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
    'product_id': 12,
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
    'product_id': 13,
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
    'product_id': 14,
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
    'product_id': 15,
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
        tmpl.querySelector('.product-link').href = "./product_pages/" + detail_page + "#" + card.product_id.toString();

        var cardList = document.getElementById(sectionID);

        cardList.appendChild(tmpl);
    }
}


// function to create product detail using template 
function createProductDetail(){
    var productID = window.location.toString().split("#")[1]
    var detailProduct = products.find(product => product.product_id == productID)

    document.getElementById("product_price").innerHTML = "$" + detailProduct.price
    document.getElementById("product_description").innerHTML = detailProduct.description
    document.getElementById("product_name").innerHTML = detailProduct.name

    var imgExt = '../assets/images/product_images/' + detailProduct.imgName
    var imgURL = "url(" + "\'" + imgExt + "\'" + ")"

    document.getElementById("product_img").style.backgroundImage = imgURL


}

var urlString = window.location;

function isIndexPage() {
    return urlString.toString().includes("index")
}

function isProductsPage() {
    return urlString.toString().includes("products")
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
}


renderPage()










