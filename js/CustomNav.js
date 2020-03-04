class CustomNav extends HTMLElement {

    constructor() {
        super();
        this.pageName = this.getAttribute("pageName");
    }


    connectedCallback() {
        if (this.pageName == "product_detail") {
            this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">    
                
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav"> 
                        <li class="navbar-brand"><a class="nav-link" href="../index.html">
                            <svg width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.9472 6.47436C43.4408 5.04934 41.9108 4.32679 40.4005 4.32679C39.8154 4.32679 39.2786 4.43973 38.7838 4.62352C37.4098 3.7833 35.7661 3.29059 33.9968 3.29059C32.9502 3.29059 31.9109 3.46571 30.9352 3.80416C29.3441 1.55663 26.603 0.156006 23.6435 0.156006C20.6849 0.156006 17.9438 1.55663 16.3531 3.80416C15.377 3.46611 14.3377 3.29059 13.291 3.29059C8.73576 3.29059 4.99375 6.53103 4.62451 10.6388C2.04109 10.8266 0 12.8179 0 15.2437C0 17.6703 2.04109 19.662 4.62451 19.8494C4.8899 22.8017 6.89895 25.3007 9.70117 26.4759L8.00924 32.2613L10.4854 32.8757L12.1679 27.1232C12.5367 27.1669 12.9098 27.1976 13.2915 27.1976C14.3381 27.1976 15.3774 27.0217 16.3535 26.6832C17.9442 28.9324 20.6853 30.3326 23.6439 30.3326C26.6034 30.3326 29.3446 28.932 30.9356 26.6832C31.672 26.9383 32.4438 27.1008 33.2284 27.1653L34.8986 32.8757L37.3743 32.2613L35.8392 27.013C39.7556 26.2322 42.7006 23.0201 42.7006 19.1835C42.7006 18.9312 42.6822 18.6817 42.657 18.4334C43.692 18.9285 44.7955 19.2752 45.8648 19.2752C46.9007 19.2752 47.8097 18.9678 48.5648 18.3606C49.4495 17.6494 49.9448 16.6664 49.9957 15.5188C50.1448 12.1595 46.4024 7.85098 44.9472 6.47436ZM4.78648 17.4952C3.54157 17.3862 2.56461 16.4184 2.56461 15.2437C2.56461 14.069 3.54157 13.1024 4.78648 12.9922C4.9711 13.7793 5.28094 14.5373 5.71643 15.2437C5.28094 15.9505 4.9711 16.7089 4.78648 17.4952ZM33.9968 24.8367C32.9549 24.8367 31.9241 24.59 31.0151 24.1229L29.8023 23.4995L29.2236 24.6624C28.2253 26.673 26.035 27.9721 23.6431 27.9721C21.252 27.9721 19.0617 26.673 18.0634 24.6624L17.4856 23.4995L16.2728 24.1229C15.3633 24.5904 14.3321 24.8367 13.291 24.8367C9.90588 24.8367 7.15195 22.3011 7.15195 19.1843C7.15195 18.0135 7.54213 16.8868 8.28019 15.9261L8.80414 15.2445L8.28019 14.5629C7.54213 13.603 7.15195 12.4759 7.15195 11.3055C7.15195 8.18864 9.90588 5.65303 13.291 5.65303C14.3321 5.65303 15.3633 5.89978 16.2732 6.36692L17.4856 6.98951L18.0634 5.82659C19.0617 3.81754 21.252 2.51845 23.6431 2.51845C26.035 2.51845 28.2253 3.81754 29.2236 5.82659L29.8014 6.98951L31.0143 6.36692C31.9241 5.89939 32.9558 5.65303 33.9968 5.65303C34.9059 5.65303 35.7657 5.84154 36.5409 6.17015C35.4999 7.27483 34.8559 8.58297 34.5819 9.21854C33.5242 9.94109 30.6164 12.1386 30.3531 14.6022C30.2378 15.6868 30.6395 16.6959 31.5151 17.5192C32.5459 18.4893 33.6075 18.6919 34.3165 18.6919C36.3063 18.6919 37.991 17.1508 38.9791 15.9863C39.0333 16.0324 39.0936 16.0808 39.1509 16.1284C39.7928 17.0446 40.1359 18.0945 40.1359 19.1847C40.1359 22.3007 37.3816 24.8367 33.9968 24.8367ZM46.8789 16.5814C46.5968 16.808 46.2738 16.9143 45.8648 16.9143C44.0019 16.9143 41.1146 14.7305 39.7329 13.3555L38.5526 12.1764L37.6803 13.5637C37.1363 14.4306 35.5319 16.3299 34.3165 16.3299C34.199 16.3299 33.8409 16.3299 33.3473 15.8663C33.0007 15.5404 32.8639 15.2213 32.9049 14.8332C33.0451 13.5082 35.1059 11.7419 36.3713 10.9407L36.7277 10.7164L36.8636 10.339C37.2051 9.39131 38.588 6.68805 40.4001 6.68805C41.1813 6.68805 42.1181 7.18392 43.1087 8.12095C44.9083 9.82342 47.5268 13.3216 47.4332 15.4224C47.4114 15.9273 47.2353 16.2953 46.8789 16.5814Z" fill="#3D383B"/>
                            </svg>
                            fluff stuff
                            </a>
                        </li>
                        <div class="nav-items">
                        <li class="nav-item"><a class="nav-link active" href="../index.html">home</a></li>
                        <li class="nav-item"><a class="nav-link" href="../products.html">products</a></li>
                        <li class="nav-item"><a class="nav-link" href="../about.html">about</a></li>
                        <li class="nav-item"><a class="nav-link" href=""><i class="material-icons">search</i></a></li>
                        <li class="nav-item"><a class="nav-link" href="../cart.html"><i class="material-icons">shopping_cart</i><span id="cart-amt" class="badge"></span></a></li>
                        </div>
                    </ul>
                </div>
            </nav> `;
        } 
        else {
            this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">    
                
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav"> 
                        <li class="navbar-brand"><a class="nav-link" href="index.html">
                            <svg width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.9472 6.47436C43.4408 5.04934 41.9108 4.32679 40.4005 4.32679C39.8154 4.32679 39.2786 4.43973 38.7838 4.62352C37.4098 3.7833 35.7661 3.29059 33.9968 3.29059C32.9502 3.29059 31.9109 3.46571 30.9352 3.80416C29.3441 1.55663 26.603 0.156006 23.6435 0.156006C20.6849 0.156006 17.9438 1.55663 16.3531 3.80416C15.377 3.46611 14.3377 3.29059 13.291 3.29059C8.73576 3.29059 4.99375 6.53103 4.62451 10.6388C2.04109 10.8266 0 12.8179 0 15.2437C0 17.6703 2.04109 19.662 4.62451 19.8494C4.8899 22.8017 6.89895 25.3007 9.70117 26.4759L8.00924 32.2613L10.4854 32.8757L12.1679 27.1232C12.5367 27.1669 12.9098 27.1976 13.2915 27.1976C14.3381 27.1976 15.3774 27.0217 16.3535 26.6832C17.9442 28.9324 20.6853 30.3326 23.6439 30.3326C26.6034 30.3326 29.3446 28.932 30.9356 26.6832C31.672 26.9383 32.4438 27.1008 33.2284 27.1653L34.8986 32.8757L37.3743 32.2613L35.8392 27.013C39.7556 26.2322 42.7006 23.0201 42.7006 19.1835C42.7006 18.9312 42.6822 18.6817 42.657 18.4334C43.692 18.9285 44.7955 19.2752 45.8648 19.2752C46.9007 19.2752 47.8097 18.9678 48.5648 18.3606C49.4495 17.6494 49.9448 16.6664 49.9957 15.5188C50.1448 12.1595 46.4024 7.85098 44.9472 6.47436ZM4.78648 17.4952C3.54157 17.3862 2.56461 16.4184 2.56461 15.2437C2.56461 14.069 3.54157 13.1024 4.78648 12.9922C4.9711 13.7793 5.28094 14.5373 5.71643 15.2437C5.28094 15.9505 4.9711 16.7089 4.78648 17.4952ZM33.9968 24.8367C32.9549 24.8367 31.9241 24.59 31.0151 24.1229L29.8023 23.4995L29.2236 24.6624C28.2253 26.673 26.035 27.9721 23.6431 27.9721C21.252 27.9721 19.0617 26.673 18.0634 24.6624L17.4856 23.4995L16.2728 24.1229C15.3633 24.5904 14.3321 24.8367 13.291 24.8367C9.90588 24.8367 7.15195 22.3011 7.15195 19.1843C7.15195 18.0135 7.54213 16.8868 8.28019 15.9261L8.80414 15.2445L8.28019 14.5629C7.54213 13.603 7.15195 12.4759 7.15195 11.3055C7.15195 8.18864 9.90588 5.65303 13.291 5.65303C14.3321 5.65303 15.3633 5.89978 16.2732 6.36692L17.4856 6.98951L18.0634 5.82659C19.0617 3.81754 21.252 2.51845 23.6431 2.51845C26.035 2.51845 28.2253 3.81754 29.2236 5.82659L29.8014 6.98951L31.0143 6.36692C31.9241 5.89939 32.9558 5.65303 33.9968 5.65303C34.9059 5.65303 35.7657 5.84154 36.5409 6.17015C35.4999 7.27483 34.8559 8.58297 34.5819 9.21854C33.5242 9.94109 30.6164 12.1386 30.3531 14.6022C30.2378 15.6868 30.6395 16.6959 31.5151 17.5192C32.5459 18.4893 33.6075 18.6919 34.3165 18.6919C36.3063 18.6919 37.991 17.1508 38.9791 15.9863C39.0333 16.0324 39.0936 16.0808 39.1509 16.1284C39.7928 17.0446 40.1359 18.0945 40.1359 19.1847C40.1359 22.3007 37.3816 24.8367 33.9968 24.8367ZM46.8789 16.5814C46.5968 16.808 46.2738 16.9143 45.8648 16.9143C44.0019 16.9143 41.1146 14.7305 39.7329 13.3555L38.5526 12.1764L37.6803 13.5637C37.1363 14.4306 35.5319 16.3299 34.3165 16.3299C34.199 16.3299 33.8409 16.3299 33.3473 15.8663C33.0007 15.5404 32.8639 15.2213 32.9049 14.8332C33.0451 13.5082 35.1059 11.7419 36.3713 10.9407L36.7277 10.7164L36.8636 10.339C37.2051 9.39131 38.588 6.68805 40.4001 6.68805C41.1813 6.68805 42.1181 7.18392 43.1087 8.12095C44.9083 9.82342 47.5268 13.3216 47.4332 15.4224C47.4114 15.9273 47.2353 16.2953 46.8789 16.5814Z" fill="#3D383B"/>
                            </svg>
                            fluff stuff
                            </a>
                        </li>
                        <div class="nav-items">
                        <li class="nav-item"><a class="nav-link active" href="index.html">home</a></li>
                        <li class="nav-item"><a class="nav-link" href="products.html">products</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html">about</a></li>
                        <li class="nav-item"><a class="nav-link" href=""><i class="material-icons">search</i></a></li>
                        <li class="nav-item"><a class="nav-link" href="cart.html"><i class="material-icons">shopping_cart</i><span id="cart-amt" class="badge"></span></a></li>
                        </div>
                    </ul>
                </div>
            </nav> `;

        }
        
    }

    
}

customElements.define('custom-nav', CustomNav);