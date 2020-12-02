import React from 'react';
import LOGO from '../images/logo.png'

export default function Footer(){
    return (
        <div id="footer" class="sticky-footer">
	{/* <!-- Main --> */}
	<div class="container">
		<div class="row">
			<div class="col-md-5 col-sm-6">
				<img class="footer-logo" src={LOGO} alt=""/>
				<br/><br/>
				<p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
			</div>

			<div class="col-md-4 col-sm-6 ">
				<h4>Links</h4>
				<ul class="footer-links">
					<li><a href="#">Home</a></li>
					<li><a href="#">Properties</a></li>
					<li><a href="#">About us</a></li>
					<li><a href="#">Contact</a></li>
				</ul>

				<ul class="footer-links">
					<li><a href="#">Blog</a></li>
					<li><a href="#">Nuestros Agentes</a></li>
					<li><a href="#">Contacto</a></li>
				</ul>
				<div class="clearfix"></div>
			</div>

			<div class="col-md-3  col-sm-12">
				<h4>Contact</h4>
				<div class="text-widget">
					<span>2555 victor Ave, IL</span> <br/>
					Phone: <span><a href="tel:55204000">(312)687-8364 </a></span><br/>
					E-Mail:<span> <a href="gmail.com">rusarwa@gmail.com</a> </span><br/>
				</div>

				<ul class="social-icons margin-top-20">
					<li><a class="facebook" href="facebook.com"><i class="icon-facebook"></i></a></li>
					<li><a class="twitter" href="twitter.com"><i class="icon-twitter"></i></a></li>
					<li><a class="linkedin" href="linkedIn.com"><i class="icon-linkedin"></i></a></li>
				</ul>
			</div>

		</div>

		{/* <!-- Copyright --> */}
		<div class="row">
			<div class="col-md-12">
				<div class="copyrights">© 2020 rusarwa</div>
			</div>
		</div>

	</div>

</div>
    );
}