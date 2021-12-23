const router=require('express').Router();
const {userController}=require('../controllers');

router.post('/idCheck',userController.check.idCheck);
router.post('/nameCheck',userController.check.nameCheck);
router.post('/signup',userController.signup);
router.post('/login',userController.login);
router.post('/logout',userController.logout);
router.get('/info',userController.info.get);
router.patch('/info',userController.info.patch);
router.delete('/',userController.del);
router.patch('/password',userController.password);
router.patch('/mbti',userController.mbti);
router.post('/authCheck',userController.check.authCheck);



module.exports=router;