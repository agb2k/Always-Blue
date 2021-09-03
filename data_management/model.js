import {
	Schema, model, ObjectId, Types,
      } from 'mongoose';

const userSchema = new Schema({
	pool: { type: String, required: true },
	request: { type: String, required: true },
	payout: { type: String, required: true },
	money_in: { type: Number, required: true },
	money_out: { type: Number, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})

const userData = mongoose.model('UserData', userSchema)