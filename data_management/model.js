import {
	Schema, model, ObjectId, Types,
      } from 'mongoose';

const userSchema = new Schema({
	pool_id: { type: String, required: true },
	request_id: { type: String, required: true },
	payout_history: { type: String, required: true },
	money_in: { type: Number, required: true },
	money_out: { type: Number, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})

const poolSchema = new Schema({
	pool_name: { type: String, required: true },
	max_pool_members: { type: Number, required: true },
	max_money_in_per_month: { type: Number, required: true },
	payouts_id: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})

const requestSchema = new Schema({
	user_id: { type: String, required: true },
	amount: { type: Number, required: true },
	max_money_in_per_month: { type: Number, required: true },
	request_date: { type: Date, default: Date.now  },
	request_start_date: { type: Date, default: Date.now  },
	request_approval_date: { type: Date, default: Date.now  },
	request_approval_status: { type: String, required: true },
	request_reason: { type: String, required: true },
	request_documents: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})

const transactionSchema = new Schema({
	user_id: { type: String, required: true },
	amount: { type: Number, required: true },
	type: { type: String, required: true },
	loan_fee: { type: Number, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})



const userData = mongoose.model('UserData', userSchema)
const poolData = mongoose.model('PoolData', poolSchema)
const requestData = mongoose.model('RequestData', requestSchema)
const transactionData = mongoose.model('TransactionData', transactionSchema)

module.exports = userData, poolData, requestData, transactionData