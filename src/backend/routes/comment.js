const router = require('express').Router();
const commentcontroller = require('../controllers/comment.controller')


router.post('/:postid', commentcontroller.addComment);
router.get('/:commentid',commentcontroller.viewComment )

module.exports = router;