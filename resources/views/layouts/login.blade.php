<!DOCTYPE html>
<html>
<head>
	<title>Animated Login Form</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/login.css') }}">
	<link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
	<script src="https://kit.fontawesome.com/a81368914c.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
	<img class="wave" src="{{ asset('ultils/images/wave.png') }}">
	<div class="container">
		<div class="img">
			<img src="{{ asset('ultils/images/bg.svg') }}">
		</div>
		<div class="login-content">
			<form action="index.html" id="form-login">
				<img src="{{ asset('ultils/images/avatar.svg') }}">
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Email</h5>
           		   		<input type="email" class="input" id="email">
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" class="input" id="password">
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" class="btn" value="Login">
            </form>
        </div>
	</div>
	<script src="{{ asset('js/app.js') }}"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script>
		const axios = window.axios;
        const inputs = document.querySelectorAll(".input");

        function addcl(){
            let parent = this.parentNode.parentNode;
            parent.classList.add("focus");
        }

        function remcl(){
            let parent = this.parentNode.parentNode;
            if(this.value == ""){
                parent.classList.remove("focus");
            }
        }

        inputs.forEach(input => {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);
		});
		$(document).ready(function(){
			$('#form-login').submit(e => {
				const email = $('#email').val();
				const password = $('#password').val();
				axios
					.post('{{ route('login')}}', {
						email,
						password
					})
					.then(e => {
						window.location.replace('/');
					})
					.catch(err => {
						swal({
							text : err.response.data.message,
							icon : 'error',
							dangerMode: true,
							button: true
						});
					})
				e.preventDefault();
			});
		});
    </script>
</body>
</html>
