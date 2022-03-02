const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  massage: { type: String },
});

listSchema.pre('save', async function (next){
    if(this.isModified('name'))
    {
        this.name = await bcrypt.hash(this.name, 12);
    }
})

const List2 = new mongoose.model("List2", listSchema);
module.exports = List2;
