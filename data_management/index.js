const express = require("express")
const UserData = require('./model')
const router = express.Router()

router.post('/', async (req, res) => {
	const user = new UserData({  
	  pool_id: req.body.pool_id,
	  request_id: req.body.request_id,
	  payout_history: req.body.payout_history,
	  money_in: req.body.money_in,
	  money_out: req.body.money_out,
	});
	try{
	 const savedUser = await user.save();
	  res.json(savedUser);
	} catch(err){
	  res.json({ message: err });
	}
      });

module.exports = router