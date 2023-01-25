const base = require("@playwright/test")

exports.customTest = base.test.extend(
    {
        myInfoData:{
            menu:"My Info",
            header:"PIM",
            firstName:"Rahul",
            middleName:"P",
            lastName:"PL",
            nationality:"Indian",
            marital:"Other"
        }
    }
)