var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// mysql 접속 정보
const connect = mysql.createConnection({
  host: 'react200.#########.ap-northeaast-2.rds.amazonaws.com',
  port: '3306',
  database: 'react',
  user: 'admin',
  password: 'react200RDS',
});


router.use(bodyParser.urlencoded({extended: true}));

router.post('/', (req, res, next) => {
  var type = req.query.type;
  if(type == 'list'){
    try{
      var dbconnect_Module = require('./dbconnect_Module');

      req.body.mapper = 'SwToolsMapper';
      req.body.crud = 'select';
      req.body.mapper_id = 'selectSwToolsList';

      router.use('/', dbconnect_Module);
      next('route')
    } catch (error) {
      console.log("Module > dbconnect error : " + error);
    }
  }
})

router.post('/', (req, res) => {
  const mybatisMapper = require('mybatis-mapper');
  var param = req.body;

  // mybatis mapper 경로 설정
  mybatisMapper.createMapper(['./models/'+param.mapper+'.xml']);
  var time = new Date();

  var format = {language: 'sql', indent: ' '};
  // mysql 쿼리 정보 세팅
  var query = mybatisMapper.getStatement(param.mapper, param.mapper_id, param, format);


  connection.query(query, function(error, results) {
    if(error){
      console.log('db error :' + error);
    }
    var time2 = new Date();
    string = JSON.stringify(results);
    var json = JSON.parse(string);
    res.send({json});
    console.log('====== Node Mybatis Query Log End =====');
  })
})

module.exports = router;