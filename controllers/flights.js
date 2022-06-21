import { Flight } from '../models/flight.js'

function newFlight(req, res) {
 res.render('flights/new', {
  title: 'Add Flight'
 })
}


function create(req, res) {
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(', ')
  }
	for (let key in req.body) {
	  if (req.body[key] === '') delete req.body[key]
	}
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    res.redirect('/flights')
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