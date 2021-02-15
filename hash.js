const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');

const jwt = require('jsonwebtoken');

//bcrypt.genSalt(10,(err,salt)=>{
  //  if(err) return next(err)

    //bcrypt.hash('password123',salt,(err,hash)=>{
      //  if(err) next(err)
        //console.log(hash)
    //})
///})
//const secret = 'mysecretpassword';
//const secretSalt = 'dkjknkncnmcmndsnldslkdldllnkdsldkld';
//const user = {
   // id: 1,
   // token: MD5('ARSENAALLLL').toString() + secretSalt
//}

//console.log(user)

const id = '1000';
const secret = 'secretpassword';
const receivedToken='eyJhbGciOiJIUzI1NiJ9.MTAwMA.iELQA-AYiFy87ZcrBJS0rIT14fFpctrIDFeVOYIXT0U';


const token = jwt.sign(id,secret);
const decodeToken = jwt.verify(receivedToken,secret);
console.log(decodeToken)