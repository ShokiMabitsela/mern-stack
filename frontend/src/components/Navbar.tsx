import React from "react"; 
import { useColorMode } from "@chakra-ui/react";

import { FC } from "react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { PlusSquareIcon } from "@chakra-ui/icons"; // You can use a custom icon if you want to avoid Chakra UI

const Navbar: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<div className="max-w-screen-xl mx-auto px-4">
			<div className="flex items-center justify-between h-16 flex-col sm:flex-row">
				<div className="text-center">
					<h1 className="text-2xl sm:text-3xl font-bold uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
						<Link to="/">LuJeweller 🛒</Link>
					</h1>
				</div>

				<div className="flex items-center space-x-2">
					<Link to="/create">
						<button className="p-2 rounded bg-gray-200 hover:bg-gray-300 transition duration-200">
							<PlusSquareIcon className="text-xl" />
						</button>
					</Link>
					<button onClick={toggleColorMode} className="p-2 rounded bg-gray-200 hover:bg-gray-300 transition duration-200">
						{colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
