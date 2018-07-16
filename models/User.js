const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
	google: {
		id: String,
		name:String,
		profileImage:String
	},
	github: {
		id: String
	},
	twitter: {
		id: String,
	}
})

mongoose.model('users', userSchema)