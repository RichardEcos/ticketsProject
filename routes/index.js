var express = require('express');
var router = express.Router();
var ctrlUsers = require('./../controllers/users');
var ctrlTickets = require('./../controllers/tickets');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
		name: 'test'
	});
});

router.get('/users', ctrlUsers.usersList);
router.post('/users', ctrlUsers.userCreate);
router.get('/users/:userId', ctrlUsers.userRead);
router.put('/users/:userId', ctrlUsers.userUpdate);
router.delete('/users/:userId', ctrlUsers.userDelete);

router.get('/users/:userId/tickets', ctrlTickets.ticketsList);
router.get('/users/:userId/tickets/:ticketId', ctrlTickets.ticketRead);
router.post('/users/:userId/tickets/:ticketId', ctrlTickets.ticketCreate);
router.put('/users/:userId/tickets/:ticketId', ctrlTickets.ticketUpdate);
router.delete('/users/:userId/tickets/:ticketId', ctrlTickets.ticketDelete);

module.exports = router;
