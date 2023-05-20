const { request } = require('express');
var express = require('express');
require('../model/database');
const { resolve } = require('path');
const { all } = require('express/lib/application');
const { assert } = require('console');

const PanchangModel = require('../model/Panchang');

        exports.panchangUpload = async(req, res) =>{
            try{
                const {lucky_numbers,lucky_colour,presiding_deity,auspicious_dates,panchang_date,panchang_day,vikranm_samvat,shak_samvat,ion,season,month,side,p_date,nakshatra,yoga,rahukal,sunrise,sunset,directional,extra_1,extra_2,extra_3,extra_4,extra_5,extra_6,extra_7,extra_8,extra_9,extra_10,panchang_thumbnail} = req.body;
                let uploadPanchang = new PanchangModel({
                    lucky_numbers: lucky_numbers, 
                    lucky_colour:lucky_colour,
                    presiding_deity:presiding_deity,
                    auspicious_dates:auspicious_dates,
                    panchang_date:panchang_date,                                    
                    panchang_day:panchang_day,                                      
                    vikranm_samvat:vikranm_samvat,
                    shak_samvat:shak_samvat,                                      
                    ion:ion,                                     
                    season:season,                                       
                    month:month,                                     
                    side:side,                                     
                    p_date:p_date,                               
                    nakshatra:nakshatra,                                
                    yoga:yoga,                                  
                    rahukal:rahukal,                                 
                    sunrise:sunrise,                             
                    sunset:sunset,                                 
                    directional:directional,                        
                    extra_1:extra_1,                                   
                    extra_2: extra_2,                                   
                    extra_3:extra_3,                                
                    extra_4: extra_4,                                     
                    extra_5:extra_5,                                  
                    extra_6:extra_6,                                        
                    extra_7:extra_7,                             
                    extra_8:extra_8,              
                    extra_9:extra_9,                   
                    extra_10:extra_10,                                  
                    panchang_thumbnail:panchang_thumbnail,                                   
                    update_date:update_date                      
                });
                await uploadPanchang.save();
                res.send('Panchang Save Successfully.');
            }catch(error){
                res.status(400).json({message: error.message})
            }
        }






        


       