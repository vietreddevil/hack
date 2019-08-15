var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
var session = require('express-session');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
router.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
var result_image = "";
// fake data
const farfetch = 
{trousers:[{url:"https://cdn-images.farfetch-contents.com/13/33/65/06/13336506_16493517_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/14/09/36/70/14093670_18942660_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/13/95/16/57/13951657_20265064_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/14/03/13/97/14031397_18768150_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/13/98/41/81/13984181_18918486_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/14/16/52/84/14165284_20765875_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/13/81/07/02/13810702_17618887_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/14/10/01/82/14100182_20706917_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/14/03/13/47/14031347_20058373_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/14/07/86/28/14078628_18703721_300.jpg"}], 
/////shirt
shirt:[{url:"/img/cloth/000038_1.jpg"},
{url:"/img/cloth/000038_1.jpg"},
{url:"/img/cloth/000097_1.jpg"},
{url:"/img/cloth/000118_1.jpg"},
{url:"/img/cloth/000192_1.jpg"},
{url:"/img/cloth/000228_1.jpg"},
{url:"/img/cloth/000339_1.jpg"}]};
/////doublef
const doublef = 
{trousers:[{url:"https://cdn-images.farfetch-contents.com/14/08/34/45/14083445_20152400_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/13/61/08/28/13610828_17130453_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/13/81/73/65/13817365_17390156_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/13/26/41/10/13264110_16717567_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/13/96/36/35/13963635_18150040_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/14/14/77/29/14147729_18904001_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/13/63/16/94/13631694_16397758_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/14/03/46/75/14034675_20296014_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/13/99/09/01/13990901_18680800_300.jpg"},
{url:"https://cdn-images.farfetch-contents.com/14/03/13/48/14031348_20557513_300.jpg"}], 
/////shirt
shirt:[{url:"/img/cloth/000523_1.jpg"},
{url:"/img/cloth/000685_1.jpg"},
{url:"/img/cloth/000957_1.jpg"},
{url:"/img/cloth/001537_1.jpg"},
{url:"/img/cloth/001559_1.jpg"},
{url:"/img/cloth/001744_1.jpg"}]};

var has_image = true;
var clothes_wear = {trousers:"", shirt:""};
var clothes_choice = [];
// end fake data

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/home', function(req, res, next) {
  res.render('index', {title: "Home"});
});

router.get('/home/:type/:name', function(req, res, next) {
  if(req.params.type == "brand") {
    if(req.params.name == "farfetch") {
      res.render('brand', {data:farfetch, brand:"farfetch"})
    } else {
      res.render("brand", {data:doublef, brand: "doublef"});
    }
  }else { 
    res.render('cate', {d1: farfetch, d2: doublef, typename: req.params.name}); 
  }
});

router.post('/check_image', urlencodedParser, function(req, res, next) {
  if(has_image) {
    if(req.body.type == "trousers") {
      clothes_wear.trousers = req.body.img_src;
    }else if(req.body.type == "shirt") {
      clothes_wear.shirt = req.body.img_src;
    }
    console.log(clothes_wear.trousers)
    console.log(clothes_wear.shirt)
    return res.redirect('/getwear');
  }else {
    return res.redirect()
  }
});
router.get('/getwear', function(req, res) {
  res.render('getimage', {choice: clothes_wear});
  // return res.redirect('/wear');
});
router.get('/wear', function(req, res) {
  res.render('wear', {farfetch: farfetch, doublef: doublef, rs: result_image, clothes_wear:clothes_wear});
});
router.post('/addtocard', urlencodedParser, function(req, res) {
  var formidable = require('formidable');
  var form = new formidable.IncomingForm();
  form.uploadDir = "";
  form.keepExtensions = true;
  form.maxFieldsSize = 10 * 1024 * 1024;
  form.multiples = false;
  form.parse(req, (err, fields, files) => {
    clothes_choice.push({url:fields.src});
  });
  res.send("ok");
});
router.post('/test', urlencodedParser, function(req, res) {
  var formidable = require('formidable');
  var form = new formidable.IncomingForm();
  form.uploadDir = "";
  form.keepExtensions = true;
  form.maxFieldsSize = 10 * 1024 * 1024;
  form.multiples = true;
  form.parse(req, (err, fields, files) => {
    console.log(files);
  });
  res.send("ok");
});
router.post('/submit', urlencodedParser, function(req, res) {
  var formidable = require('formidable');
  var form = new formidable.IncomingForm();
  form.uploadDir = "";
  form.keepExtensions = true;
  form.maxFieldsSize = 10 * 1024 * 1024;
  form.multiples = true;
  form.parse(req, (err, fields, files) => {
    console.log(files);
  });
  res.send("ok");
}); 
router.post('/postwear', urlencodedParser, (req, res)=> {
  result_image = req.body.temp_rs;
  return res.redirect('/wear');
  // var formidable = require('formidable');
  // var form = new formidable.IncomingForm();
  // form.uploadDir = "";
  // form.keepExtensions = true;
  // form.maxFieldsSize = 10 * 1024 * 1024;
  // form.multiples = true;
  // form.parse(req, (err, fields, files) => {
  //   result_image = fields.src;
  //   console.log(result_image);
  //   console.log('??????')
  //   return res.redirect('/wear');
  // });
});
module.exports = router;
