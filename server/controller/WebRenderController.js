const { request } = require('express');
var express = require('express');
require('../model/database');
const { resolve } = require('path');
const { all } = require('express/lib/application');
const { assert } = require('console');

//Model List
const PanchangModel = require('../model/Panchang');


        //HomePage View for Front-End
        exports.HomePageView = async(req, res) =>{
            try{
                res.render('homex');
            }catch(error){
                res.status(400).json({message: error.message})
            }
        }

        exports.PanchangPageView = async(req, res) =>{
            try{
                res.render('panchangview');
            }catch(error){
                res.status(400).json({message: error.message})
            }
        }







        


       