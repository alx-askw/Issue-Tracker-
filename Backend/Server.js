"use strict";
//Server.js
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//CONSTS
var HOST = "127.0.0.1";
var PORT = 3030;
var server = (0, express_1.default)();
var SERVER = server.listen(PORT, function () {
    console.log("server running on ");
});
