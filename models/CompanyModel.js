var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema({
    _id: Schema.Types.ObjectId,
    Name : {
        type : String
    },
    Phone : {
        type : String
    },
    Company_Name :{
        type:String
    },
    Country : {
        type : String
    },
    City : {
        type: String
    },
    Website : {
        type : String
    },
    Email:{
        type : String
    },
    commercial_Register : {
        type : String
    },
    Info : {
        type : String
    },
    Sponser : 
    {
        type : Boolean
    },
    Guest :
    {
        type  : Boolean
    } ,
    Invester : 
    {
        type : Boolean
    }

    
    

})

const Company = mongoose.model('Companies', CompanySchema);
module.exports = Company; 