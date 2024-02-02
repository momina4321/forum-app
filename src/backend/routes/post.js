const postcontroller = require('../controllers/post.controller')
const router = require('express').Router();

router.get('/',postcontroller.Posts)
router.get('/:id',postcontroller.viewPost)
router.post('/add',postcontroller.addPost)
router.post('/edit/:id',postcontroller.updatePost)
router.delete('/:id',postcontroller.deletePost)

module.exports=router;