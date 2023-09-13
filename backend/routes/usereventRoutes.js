
import express from 'express';
const router=express.Router();
import{isAdmin, protect} from '../middleware/authMiddleware.js'

import {getUserEvents,getUserEventById,deleteEvent,usereventcreate,updateuserEvent} from '../controllers/userEventController.js'
//import { getProducts,getProductById, deleteProduct,updateProduct,createProduct, createReview, getTopProducts }from '../controllers/productController.js'
// export {getUserEvents,getEventById,deleteEvent,usereventcreate,updateuserEvent}
//import{isAdmin, protect} from '../middleware/authMiddleware.js'

// router.route('/').get(getEvents).post(protect,isAdmin,registranteventcreate)
// router.route('/').get(getEvents).post(protect,isAdmin,registranteventcreate)
router.route('/').get(getUserEvents).post(protect,usereventcreate)


//router.route('/:id/reviews').post(protect,createReview)

//router.get('/top',getTopProducts)

// router.route('/:id').get(getEventById).delete(protect,isAdmin,deleteEvent).put(protect,isAdmin,updateEvent)

router.route('/:id').get(getUserEventById).delete(deleteEvent).put(protect,updateuserEvent);


export default router