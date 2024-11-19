var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
var ProductCard = function (_a) {
    var product = _a.product;
    var _b = useState(product), updatedProduct = _b[0], setUpdatedProduct = _b[1];
    var _c = useProductStore(), deleteProduct = _c.deleteProduct, updateProduct = _c.updateProduct;
    var toast = useToast();
    var _d = useState(false), isOpen = _d[0], setIsOpen = _d[1];
    var handleDeleteProduct = function (pid) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, success, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, deleteProduct(pid)];
                case 1:
                    _a = _b.sent(), success = _a.success, message = _a.message;
                    if (!success) {
                        toast({
                            title: "Error",
                            description: message,
                            status: "error",
                            duration: 3000,
                            isClosable: true,
                        });
                    }
                    else {
                        toast({
                            title: "Success",
                            description: message,
                            status: "success",
                            duration: 3000,
                            isClosable: true,
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleUpdateProduct = function (pid, updatedProduct) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, success, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, updateProduct(pid, updatedProduct)];
                case 1:
                    _a = _b.sent(), success = _a.success, message = _a.message;
                    setIsOpen(false);
                    if (!success) {
                        toast({
                            title: "Error",
                            description: message,
                            status: "error",
                            duration: 3000,
                            isClosable: true,
                        });
                    }
                    else {
                        toast({
                            title: "Success",
                            description: "Product updated successfully",
                            status: "success",
                            duration: 3000,
                            isClosable: true,
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs("div", { className: "shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-xl bg-white dark:bg-gray-800", children: [_jsx("img", { src: product.image, alt: product.name, className: "h-48 w-full object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-md font-bold mb-2", children: product.name }), _jsxs("p", { className: "font-bold text-xl text-gray-600 dark:text-gray-200 mb-4", children: ["$", product.price] }), _jsxs("div", { className: "flex space-x-2", children: [_jsx("button", { onClick: function () { return setIsOpen(true); }, className: "p-2 bg-blue-500 text-white rounded-full", children: _jsx(EditIcon, { fontSize: 20 }) }), _jsx("button", { onClick: function () { return handleDeleteProduct(product._id); }, className: "p-2 bg-red-500 text-white rounded-full", children: _jsx(DeleteIcon, { fontSize: 20 }) })] })] }), isOpen && (_jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50", children: _jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Update Product" }), _jsx("input", { type: "text", placeholder: "Product Name", value: updatedProduct.name, onChange: function (e) { return setUpdatedProduct(__assign(__assign({}, updatedProduct), { name: e.target.value })); }, className: "w-full p-2 mb-4 border border-gray-300 rounded-lg" }), _jsx("input", { type: "number", placeholder: "Price", value: updatedProduct.price, onChange: function (e) { return setUpdatedProduct(__assign(__assign({}, updatedProduct), { price: e.target.value })); }, className: "w-full p-2 mb-4 border border-gray-300 rounded-lg" }), _jsx("input", { type: "text", placeholder: "Image URL", value: updatedProduct.image, onChange: function (e) { return setUpdatedProduct(__assign(__assign({}, updatedProduct), { image: e.target.value })); }, className: "w-full p-2 mb-4 border border-gray-300 rounded-lg" }), _jsxs("div", { className: "flex space-x-2 mt-4", children: [_jsx("button", { onClick: function () { return handleUpdateProduct(product._id, updatedProduct); }, className: "p-2 bg-blue-500 text-white rounded-full", children: "Update" }), _jsx("button", { onClick: function () { return setIsOpen(false); }, className: "p-2 bg-gray-500 text-white rounded-full", children: "Cancel" })] })] }) }))] }));
};
export default ProductCard;
