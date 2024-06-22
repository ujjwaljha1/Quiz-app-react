
const { v4: uuid } = require('uuid');
const userdata = {
    "users": [
        {
            id: uuid(),
            username: "ujjwal",
            password: "password1",
            emailId: "ujjwal@gmail.com",
        },
        {
            id: uuid(),
            username: "ashishjangra",
            password: "aj12345",
            emailId: "aj@gmail.com",
        },
    ]
}

module.exports=userdata
