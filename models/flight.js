import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
  },
  price: {
    type: Number,
    min: 0
  }
})

const flightSchema = new Schema({
  airline: { 
    type: String,
  },
  airport: { 
    type: String, 
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: { 
    type: Number, 
    min: 10, 
    max: 9999,
    required: true
  },
  departs: { 
    type: Date, 
    default: function() {
      const date = new Date()
      return date.setFullYear(date.getFullYear() + 1)
    }
  },
  tickets: [ticketSchema]
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}