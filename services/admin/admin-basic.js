
var ligle = require('../index.js').ligle;
var logger = ligle.util.logger('basic');
var Model = require('../model/basic.js');

// 路由
var router = ligle.base.routes.Router(Model);
router
  .route('/a_add/basic')
  .get(function(req,res){
    var rd = res.ligle.renderer;
    rd.render('console/a_basic_add');
  })
  .post(function(req,res){
    var rd = res.ligle.renderer;
    var obj = res.ligle.model;

    obj.addData(req.body);
    obj.processFiles(req.files);
    obj.save(function(err,savedObj){
      var msg = err? err:'success saved!';
      logger.trace('saved Id',savedObj._id);
      rd.renderEO('console/a_basic_add',err,{msg:msg});
    });
  });

router
  .route('/a_detail/basic/:id')
  .get(function(req,res){
    logger.debug('/a_detail/basic/:id','get');
    var rd = res.ligle.renderer;
    var obj = res.ligle.model;
    logger.debug(req.params.id);
    obj.get({_id:req.params.id},function(err,getObj){
      rd.renderEO('console/a_basic_detail',err,{data:getObj});
    });
  })
  .post(function(req,res){
    var rd = res.ligle.renderer;
    var obj = res.ligle.model;
    obj.get({_id:req.params.id},function(err,getObj){
      if(err) req.redirect('back');
      getObj.addData(req.body);
      getObj.processFiles(req.files);
      getObj.save(function(err,savedObj){
        rd.renderEO('console/a_basic_detail',err,{data:getObj});
      });
    });
  });

router
  .route('/a_basic')
  .get(function(req,res){
    logger.debug('/a_basic','get');
    var rd = res.ligle.renderer;
    var obj = res.ligle.model;
    obj.getList({},function(err,objs){
      rd.render('console/a_basic',{basic:objs});
    });
  });

router
  .route('/a_del/basic/:id')
  .get(function(req,res){
    var rd = res.ligle.renderer;
    var obj = res.ligle.model;
    logger.debug(req.params.id);
    obj.delete({_id:req.params.id},function(err,getObj){
      req.flash('error',err);
      res.redirect('/a_basic');
    });
  })

module.exports = router;

