import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => (
	<>
		<p>
			<a href="#home">Home</a>
		</p>
		<p>
			<a href="#whatgpt3">What is GPT?</a>
		</p>
		<p>
			<a href="#possibility">Open AI</a>
		</p>
		<p>
			<a href="#features">Case Studies</a>
		</p>
		<p>
			<a href="#blog">Library</a>
		</p>
	</>
);

const SignIn = () => (
	<>
		<p>Sign In</p>
		<button type="button">Sign Up</button>
	</>
);

function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="navbar">
			<div className="navbar-links">
				<div className="navbar-logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="link-container">
					<Menu />
				</div>
			</div>
			<div className="signin-btn">
				<SignIn />
			</div>
			<div className="mobile-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="menu-container scale-up-center">
						<div className="mobile-links">
							<Menu />
							<div className="mobile-signin-btn">
								<SignIn />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
