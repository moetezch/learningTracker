const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
	google: {
		id: String,
	},
	github: {
		id: String
	},
	twitter: {
		id: String,
	},
	name:String,
	profileImage:String
})

mongoose.model('users', userSchema)