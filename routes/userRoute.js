const router = require('express').Router();
const ctrl = require('../controllers/userControllers');
const { verifyToken, verifyAdmin } = require('../middlewares/verify');

router.get('/', verifyToken, ctrl.getAll);
router.get('/filter', verifyToken, ctrl.filter);
router.get('/search', verifyToken, ctrl.search);
router.get('/:id', verifyToken, ctrl.getUserById);
router.post('/create', [verifyToken, verifyAdmin], ctrl.create);
router.put('/:id', [verifyToken, verifyAdmin], ctrl.update);
router.delete('/:id', [verifyToken, verifyAdmin], ctrl.delete);

module.exports = router;
