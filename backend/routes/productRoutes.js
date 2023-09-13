import express from 'express'
const router=express.Router()
import { getProducts,getProductById, deleteProduct,updateProduct,createProduct, createReview, getTopProducts }from '../controllers/productController.js'
import{isAdmin, protect} from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect,isAdmin,createProduct)
router.route('/:id/reviews').post(protect,createReview)
router.get('/top',getTopProducts)
router.route('/:id').get(getProductById).delete(protect,isAdmin,deleteProduct).put(protect,isAdmin,updateProduct)

export default router