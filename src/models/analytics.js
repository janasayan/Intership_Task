const mongoose = require("mongoose");

const analyticSchema = new mongoose.Schema({
    user_master_id: {
        type: Number,
        max: 99999999999,
    },
    page: {
        type: String,
        maxlength: 50,
    },
    page_id: {
        type: Number,
        max: 99999999999,
    },
    referrer: {
        type: String,
        maxlength: 200,
    },
    utm: {
        type: String,
        maxlength: 50,
    },
    activity_events: {
        type: String,
    },
    start_time: {
        type: String,
        maxlength: 20,
    },
    end_time: {
        type: String,
        maxlength: 20,
    },
    platform: {
        type: String,
        maxlength: 10,
    },
    version: {
        type: String,
        maxlength: 10,
    },
    ip: {
        type: String,
        maxlength: 20,
    },
    added_on: {
        type: Date,
    }
    
})

const analytic = new mongoose.model('analytic', analyticSchema);

module.exports = analytic;