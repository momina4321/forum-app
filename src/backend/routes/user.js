const usercontroller = require('../controllers/user.controller')
const router = require('express').Router()

router.post('/signup',usercontroller.addUser)
router.get('/:username',usercontroller.viewUser)
router.post('/login',usercontroller.login)
router.get('/',usercontroller.viewAllUsers)

module.exports = router;