const express = require('express');
const http = require('http');


require('dotenv').config();

(async () =>{
   const ConfigLoader = require('./config/ConfigLoaderFactory').getLoader();
   await ConfigLoader.loadConfig();
})();
