export interface ProjectSchema
{
    Project_Name :{
        type:String,
    },
    Year : { 
        type :Number,
    },
    Category : {
        type : String
    },
    tags : [{type : String}],
    Supervisor : {
        type : String 

    },
    PYear :{
        type : Number
    },
    Summary : {
        type : String
    },
    Details : {
        type : String
    },
    Image : {
        type: String
    },
    Members: [{type : String}],
    Email:{
        type : String
    }
}