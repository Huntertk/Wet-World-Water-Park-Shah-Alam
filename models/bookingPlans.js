import mongoose from 'mongoose'

const bookingPlanSchema = new mongoose.Schema({
    title:{
        type: String
    },
    desc:{
        type: String
    },
    type:{
        type: String
    },
    image:{
        type:[String]
    },
    pricing:{
        adult: Number,
        child: Number,
        senior: Number,
    }
}, {timestamps: true})

const BookingPlan = mongoose.model('bookingPlan', bookingPlanSchema)
export default BookingPlan