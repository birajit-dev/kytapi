const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const videosSchema = new mongoose.Schema({
    videos_id:{
        type: Number,
    },
    videos_title:{
        type: String,
    },
    videos_thumbnail:{
        type: String,
    },
    videos_url:{
        type: String,
    },
    vides_description:{
        type: String,
    },
    videos_category:{
        type: String,
    },
    videso_keyword:{
        type: String,
    },
    videos_passkey:{
        type: String,
    }
});

videosSchema.plugin(AutoIncrement, {id:'videos_id',inc_field: 'video_id'});
module.exports = mongoose.model('allvideos', videosSchema);