const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    user_master_id: {
        type: Number,
        max: 99999999999,
    },
    content_id: {
        type: Number,
        max: 99999999999,
    },
    
    content_type: {
        type: String,
        maxlength: 20,
    },

    start_time: {
        type: String,
        maxlength: 255,
    },
    end_time: {
        type: String,
        maxlength: 255,
    },
    video_duration: {
        type: String,
        maxlength: 255,
    },
    seekbar_change: {
        type: Array,
        
    },
    progress: {
        type: Array,
    },
    max_view_duration: {
        type: String,
        maxlength: 255,
    },
    play_time: {
        type: String,
        maxlength: 255,
    },

    /*
    raw_json: {
        type: String,
        //required: true,
        //unique: true,
    },
    */
    
    added_on: {
        type: Number,
    }
})

const Videotracking = new mongoose.model('videotracking', videoSchema);

module.exports = Videotracking;