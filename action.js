// Add to Cart Button
var cartButtons = document.querySelectorAll('.product button');
var cartItems = [];

for (var i = 
    0; i < cartButtons.length; i++) {
        cartButtons[i].addEventListener('click', function() {
            var product = this.parentElement;
            var productTitle = product.querySelector('h2').textContent;
            var productPrice = product.querySelector('.price').textContent;
    
            addToCart(productTitle, productPrice);
        });
    }
    
    function addToCart(title, price) {
        var cartItem = {
            title: title,
            price: price
        };
    
        cartItems.push(cartItem);
    
        alert(title + " added to cart.");
    }
    
		// Code for Java scripts login 
		const loginForm = document.getElementById('login-form');

		// add event listener for form submission
		loginForm.addEventListener('submit', function(event) {
			event.preventDefault(); // prevent the form from submitting

			// get the input values
			const username = document.getElementById('username').value;
			const password = document.getElementById('password').value;

			// perform some validation
			if (username === '') {
				alert('Please enter your username.');
				return;
			}
			if (password === '') {
				alert('Please enter your password.');
				return;
			}

			// TODO: perform login logic here
			// for example, you could send an AJAX request to a server-side script to authenticate the user

			// clear the form inputs
			document.getElementById('username').value = '';
			document.getElementById('password').value = '';
		});

        const previous = document.querySelector('.previous');
        const next = document.querySelector('.next');
        const images = document.querySelector('.slider-carousel').children;
        const totalImages = images.length;
        let currentIndex = 0;
    
    
        // Event Listeners to previous and next buttons
        previous.addEventListener('click', () => {
          previousImage()
        })
    
        next.addEventListener('click', () => {
          nextImage();
        })
        
        
        // Function to go to next Image
        function nextImage(){
    
          images[currentIndex].classList.remove('main');
            if(currentIndex == totalImages-1){
                currentIndex = 0;
            }
            else{
                currentIndex++;
            }
    
          images[currentIndex].classList.add('main');
          
        }
        
        // Function to go to previous Image
        function previousImage(){
    
          images[currentIndex].classList.remove('main');
            if(currentIndex == 0){
                currentIndex = totalImages-1;
            }
            else{
                currentIndex--;
            }
        
          images[currentIndex].classList.add('main');
    
        }
        
