const members = [
    {id:0,name:"Halil Bahadır",surname:"Atmacaoğlu",email:"hbahadiratmacaoglu@trakya.edu.tr",password:"mrengineer", img:"https://www.facebook.com/VitaminiKabugunda1/photos/a.178639255566063/1581973025232672/?type=3",city:"İstanbul",town:"Ümraniye"}
];
if(JSON.parse(localStorage.getItem("memberlist"))===null){ localStorage.setItem("memberlist",JSON.stringify(members));}
export default members;