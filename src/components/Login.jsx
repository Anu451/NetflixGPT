import React from 'react';
import Header from './Header';

const Login = () => {
	return (
		<div className=" relative">
			<Header />
			<div>
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/a565a928-abda-47bd-860a-55be00b7fefc/web/IN-en-20260615-TRIFECTA-perspective_7ffb95f0-7b86-4dfa-9920-7f5651418d65_large.jpg"
					alt=""
				/>
			</div>
			<form
				className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-black/70 p-10 rounded-md flex flex-col text-white gap-3 w-3/12"
				action=""
			>
				<h2 className=" text-3xl  font-semibold mb-5"> Login</h2>
				{/* <label htmlFor="email-id" className=" text-white">
					Email ID
				</label> */}
				<input
					type="email"
					name="email-id"
					id="email-id"
					placeholder="Enter your email id "
					className=" bg-zinc-800 px-5 py-2 rounded focus-visible:outline-0"
				/>

				{/* <label htmlFor="password" className=" text-white">
					Password
				</label> */}
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter your password"
					className=" bg-zinc-800 px-5 py-2 rounded focus-visible:outline-0"
				/>
				<button className="mt-3 bg-red-600 text-white rounded py-2">
					Sign In
				</button>
				<div className=" align-middle text-zinc-500">
					<input type="checkBox" id="rememberMe" className=" mr-2" />
					<label htmlFor="rememberMe">Remember me</label>
				</div>
				<div className=" mt-5 text-zinc-500">
					<p>
						New to Netflix? <span className=" text-white">Sign up now</span>
					</p>
					<p>This page is protected by google capche </p>
				</div>
			</form>
		</div>
	);
};

export default Login;
