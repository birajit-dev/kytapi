const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const panchangSchema = new mongoose.Schema({
    panchang_id:{
        type: Number,
    },
    lucky_numbers:{
        type: String,
    },
    lucky_colour:{
        type: String,
    },
    presiding_deity:{
        type: String,
    },
    auspicious_dates:{
        type: String,
    },
    panchang_date:{
        type: String,
    },
    panchang_day:{
        type: String,
    },
    vikranm_samvat:{
        type: String,
    },
    shak_samvat:{
        type: String,
    },
    ion:{
        type: String,
    },
    season:{
        type: String,
    },
    month:{
        type: String,
    },
    side:{
        type: String,
    },
    p_date:{
        type: String,
    },
    nakshatra:{
        type: String,
    },
    yoga:{
        type: String,
    },
    rahukal:{
        type: String,
    },
    sunrise:{
        type: String,
    },
    sunset:{
        type: String,
    },
    directional:{
        type: String,
    },
    extra_1:[{
        heading: String,
        content: String,
    }],
    // extra_2:{
    //     type: Array,
    // },
    // extra_3:{
    //     type: Array,
    // },
    // extra_4:{
    //     type: Array,
    // },
    // extra_5:{
    //     type: Array,
    // },
    // extra_6:{
    //     type: Array,
    // },
    // extra_7:{
    //     type: Array,
    // },
    // extra_8:{
    //     type: Array,
    // },    extra_1:{
    //     type: Array,
    // },
    // extra_9:{
    //     type: Array,
    // },
    // extra_10:{
    //     type: Array,
    // },
    panchang_thumbnail:{
        type: String,
    },
    update_date:{
        type: String,
    },
    pandeet_name:{
        type: String,
    }

});

panchangSchema.plugin(AutoIncrement, {id:'panchang_id',inc_field: 'panchang_id'});
module.exports = mongoose.model('panchangs', panchangSchema);