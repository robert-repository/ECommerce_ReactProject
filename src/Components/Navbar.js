import React from 'react';
import LOGO from '../images/logo.png'
import {Link} from 'react-router-dom';


export default function Navbar(){
    return (
        <div id="header">
		<div class="container">
			<div class="left-side">
				<div id="logo">
					<a href="index.html"><img src={LOGO} alt=""/></a>
				</div>
				<div class="mmenu-trigger">
					<button class="hamburger hamburger--collapse" type="button">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</button>
				</div>

				<nav id="navigation" class="style-1">
					<ul id="responsive">

						<li><Link to = "/">Home</Link></li>
						<li><Link to = "/properties">Properties</Link></li>
						<li><Link to = "we">About us</Link></li>
						<li><Link to = "/contact">Contact</Link></li>

					</ul>
				</nav>
				<div class="clearfix"></div>

			</div>

			<div class="right-side">
				<div class="header-widget">
					<a href="#" class="button border">Publish your Property</a>
				</div>
			</div>

		</div>
	</div>
    );
}