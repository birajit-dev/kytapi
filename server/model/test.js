const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const testSchema = new mongoose.Schema({
    panchang_id:{
        type: Number,
    },
    auspicious_dates:{
        type: String,
    },
    pandeet_name:{
        type: String,
    }


});

testSchema.plugin(AutoIncrement, {id:'test_id',inc_field: 'test_id'});
module.exports = mongoose.model('test', testSchema);