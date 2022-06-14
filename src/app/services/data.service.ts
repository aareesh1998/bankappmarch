import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    // database
    db:any = {
      1000:{"acno":1000,"username":"Neer","password":1000,"balance":5000},
      1001:{"acno":1001,"username":"Lalitha","password":1001,"balance":3000},
      1002:{"acno":1002,"username":"Aareesh","password":1002,"balance":9000}
  
    }

  constructor() { }

  login(acno:any,pswd:any){

    let db = this.db
    if(acno in db){
      if(pswd==db[acno]["password"]){
        return true


      }
      else{
        alert("incorrect password")
        return false
      }
    }
else{
  alert("user not exist!!!")
  return false
}
  }
// resgister

register(username:any,acno:any,password:any){
let db =this.db
if(acno in db){
  return false
}
else{
  // insert in db
  db[acno]={
    acno,
    username,
    password,
    "balance":0

  }
  return true
}
}



// deposit
deposit(acno:any,password:any,amt:any){
  let db=this.db
  var amount=parseInt(amt)
  if(acno in db){

    if(password== db[acno]["password"]){
      db[acno]["balance"]+=amount
      return db[acno]["balance"]

    }
    else{
      alert("incorrectpassword")
      return false
    }

  }
  else{
    alert("user doesnot exist!!!!")
    return false
  }

  
  
}


// withdraw

withdraw(acno:any,password:any,amt:any){
  let db=this.db
  var amount=parseInt(amt)
  if(acno in db){

    if(password== db[acno]["password"]){
      if(db[acno]["balance"]>amount){
        db[acno]["balance"]-=amount
        return db[acno]["balance"]

      }
      else{
        alert("insufficient balance")
        return false
      }
     

    }
    else{
      alert("incorrectpassword")
      return false
    }

  }
  else{
    alert("user doesnot exist!!!!")
    return false
  }
}



  







}
