// const express = require("express")
// const UserData = require('./model')
// const RequestData = require('./model')
// const router = express.Router()

// router.post('/user', async (req, res) => {
// 	const user = new UserData({  
// 	  pool_id: req.body.pool_id,
// 	  request_id: req.body.request_id,
// 	  payout_history: req.body.payout_history,
// 	  money_in: req.body.money_in,
// 	  money_out: req.body.money_out,
// 	});
// 	try{
// 	 const newUser = await user.save();
// 	  res.json(newUser);
// 	} catch(err){
// 	  res.json({ message: err });
// 	}
//       });

// router.get('/user/:id', async(req, res) => {
//   try{
//     const user = await UserData.findById(req.params.id);
//     res.json(user);
//   }catch (err){
//     console.log('failed');
//     res.json({message: err});
//   }  
// })
// console.log('asdf')
// router.post('/request', async (req, res) => {
// 	console.log('a')
// 	const request = new RequestData({  
// 		user_id: req.body.user_id,
// 		amount: req.body.amount,
// 		max_money_in_per_month: req.body.max_money_in_per_month,
// 		// request_date: req.body.request_date,
// 		// request_start_date: req.body.request_start_date,
// 		// request_approval_date: req.body.request_approval_date,
// 		request_approval_status: req.body.request_approval_status,
// 		request_reason: req.body.request_reason,
// 		request_documents: req.body.request_documents,
// 	});
// 	try{
// 	console.log('b')
// 	const newRequest = await request.save();
// 	console.log('c')
// 	console.log(newRequest);
// 	  res.json(newRequest);
// 	} catch(err){
// 	  res.json({ message: err });
// 	}
//       });

// router.get('/request/:id', async(req, res) => {
//   try{
//     const request = await RequestData.findById(req.params.id);
//     res.json(request);
//   }catch (err){
//     console.log('failed');
//     res.json({message: err});
//   }  
// })

// module.exports = router