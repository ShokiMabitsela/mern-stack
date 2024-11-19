import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { PlusSquareIcon } from "@chakra-ui/icons"; // You can use a custom icon if you want to avoid Chakra UI
var Navbar = function () {
    var _a = useColorMode(), colorMode = _a.colorMode, toggleColorMode = _a.toggleColorMode;
    return (_jsx("div", { className: "max-w-screen-xl mx-auto px-4", children: _jsxs("div", { className: "flex items-center justify-between h-16 flex-col sm:flex-row", children: [_jsx("div", { className: "text-center", children: _jsx("h1", { className: "text-2xl sm:text-3xl font-bold uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent", children: _jsx(Link, { to: "/", children: "LuJeweller \uD83D\uDED2" }) }) }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Link, { to: "/create", children: _jsx("button", { className: "p-2 rounded bg-gray-200 hover:bg-gray-300 transition duration-200", children: _jsx(PlusSquareIcon, { className: "text-xl" }) }) }), _jsx("button", { onClick: toggleColorMode, className: "p-2 rounded bg-gray-200 hover:bg-gray-300 transition duration-200", children: colorMode === "light" ? _jsx(IoMoon, {}) : _jsx(LuSun, { size: 20 }) })] })] }) }));
};
export default Navbar;
