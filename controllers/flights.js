import { Flight } from '../models/flight.js'

function newFlight(req, res) {
 res.render('flights/new', {
  title: 'Add Flight'
 })
}


function create(req, res) {
Flight.create(req.body)
.then(flight => {
  res.redirect('/flight/new')
})
.catch(err => {
  res.redirect('/flight/new')
})
}


function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
}

export {
  newFlight as new,
  create,
  index
}