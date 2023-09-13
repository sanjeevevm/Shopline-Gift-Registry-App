import express from 'express'
const router=express.Router()
import {getEvents,getEventById,deleteregisterevent,registranteventcreate,updateEvent} from '../controllers/registerEventController.js'
import { getProducts,getProductById, deleteProduct,updateProduct,createProduct, createReview, getTopProducts }from '../controllers/productController.js'
import{isAdmin, protect} from '../middleware/authMiddleware.js'

router.route('/').get(getEvents).post(protect,registranteventcreate)
//router.route('/').get(getEvents).post(protect,isAdmin,registranteventcreate)
router.route('/:id/reviews').post(protect,createReview)
router.get('/top',getTopProducts)
router.route('/:id').get(getEventById).delete(deleteregisterevent).put(protect,updateEvent)

export default router