const userController = require('./../controllers/userController')
const express = require('express')

const router = express.Router()
router.route('/').post(userController.createUser).get(userController.GetAllUser)

router.route('/:id').patch(userController.UpdateUser).get(userController.GetUser).delete(userController.DeleteUser)


module.exports = router