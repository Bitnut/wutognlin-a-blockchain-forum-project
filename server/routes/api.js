const api = require('../controller/user.js'); 
const router = require('koa-router')();

router.post('/user/newarticle', api.newArticle);
router.post('/user/releaseArticle', api.releaseArticle);
router.get('/articles', api.getHotArticles);
router.get('/article/:id', api.getArticleById);
router.post('/api/changesettings', api.changeSettings);


module.exports = router; // 把router规则暴露出去