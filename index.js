//const { name } = require('ejs');
const express= require('express');
const path = require('path');
//const { DEFAULT_ECDH_CURVE } = require('tls');
const port = 8000;

const db= require('./config/mongoose');
const Contact=require('./models/contact');
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
//middleware1
// app.use(function(req,res,next){
//     //console.log('middleware 1 called');
//     req.myname="arpan";
//     next();
// });

app.use(express.static('assets'));
var contactList= [
    {
        name: "dhruv",
        phone: "12121212"
    },
    {
        name: "rohan",
        phone: "12222222"
    },
    {
        name: "rahul",
        phone: "987654311"
    }
]
app.get('/', async function(req,res){
    console.log('hello');
    //console.log('from the get route controller',req.myname);
    // console.log(__dirname);
    
   
    // res.send('<h1>oh!its working don not need to worry!</h1>');
    // return res.render('home',{
    //     title : "Contact_list",
    //     contact_list: contactList
    // });
   try{ const contacts = await Contact.find({});
return res.render('home', {
  title: "Contact_list",
  contact_list: contacts
});}
catch(err){
    console.log('error in fetching contacts');
    return;
}


});
app.get('/homepage',function(req,res){
    return res.render('practice',{
        title : "home page h"
    });
});

app.post('/create-contact', async function(req, res){
    
    
    // Contact.create({
    //     name: req.body.name,
    //     phone: req.body.phone
    // }, function(err, newContact){
    //     if(err){console.log('Error in creating a contact!');
    //         return;}
    //         console.log('******', newContact);
    //         return res.redirect('/home');
    // });
   
   try{ const newContact = await Contact.create({
        name: req.body.name,
        phone: req.body.phone
      });
      console.log('******', newContact);
      return res.redirect('back');
    }
    catch(err){
        console.log('error in creating a contact');
    }

});
app.get('/delete-contact/', async function(req,res){
    //console.log(req.query);
    let id =req.query.id;
    //find the contact in the database using id and delete
    try {
        await Contact.deleteOne(id);
        await Contact.findByIdAndDelete(id);
        return res.redirect('back');
    } catch (err) {
        console.log('error in deleting an contact');
        return;
    }
});


    
    // let phone=req.query.phone;
    // let contactIndex=contactList.findIndex(contact => contact.phone== phone );
    // //console.log(contactIndex);
    // if(contactIndex!=-1)
    // {
    //     contactList.splice(contactIndex,1);
    // }
    // return res.redirect('/');

app.listen(port,function(err){
    if(err)
    {
        console.log('error in running the server',err);
        return;
    }
    console.log('server is running on port: ',port);
});
