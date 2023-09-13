import axios from 'axios';
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from '../constants/productConst';

import  {USER_EVENT_LIST_SUCCESS, USER_EVENT_LIST_FAIL } from '../constants/userEventConst';



export const listusereventss = (keyword='',pageNumber='') => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
    const { data } = await axios.get(`/api/userevent/?keyword=${keyword}&pageNumber=${pageNumber}`);
    dispatch({
      type: USER_EVENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_EVENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// export const listProductDetails = (id) => async (dispatch) => {
//     try {
//       dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
//       const { data } = await axios.get(`/api/products/${id}`);
//       dispatch({
//         type: PRODUCT_DETAILS_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: PRODUCT_DETAILS_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };

  // export const deleteProduct = (id) => async (dispatch,getState) => {

  //   try {
  //     dispatch({
  //       type: PRODUCT_DELETE_REQUEST,
  //     });
  
  //     const {userLogin:{userInfo}}=getState()
  
  //     const config = {
  //       headers: {
  //       Authorization:`Bearer ${userInfo.token}`
  //       },
  //     }
  
  //     await axios.delete(
  //       `/api/products/${id}`, config
  //     );
  //     dispatch({
  //       type: PRODUCT_DELETE_SUCCESS,
  //     });
  
  //   } catch (error) {
  //     dispatch({
  //         type: PRODUCT_DELETE_FAIL,
  //         payload:
  //           error.response && error.response.data.message
  //             ? error.response.data.message
  //             : error.message,
  //       })
  //   }
  // };
  

  export const createuserevent = (FormData) =>   (dispatch,getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      });
  
      const {userLogin:{userInfo}}=getState()
    
      const config = {
        headers: {
        Authorization:`Bearer ${userInfo.token}`
        },
      }

      const headers= {
        Authorization:`Bearer ${userInfo.token}`
      }
      console.log("***************************  before post ****************************************")
     
      const{data}=  axios.post(
        // `/api/products/`,{}, config
        `/api/userevent/`,FormData, config
      );

      console.log("***************************  before post end ****************************************")
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload:data
      });
  
    } catch (error) {
      console.log("error")
      dispatch({
          type: PRODUCT_CREATE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }
  };
  

  
  export const updateuserevent = (product, quantity) => async (dispatch,getState) => {
  
    try {
     
      const {userLogin:{userInfo}}=getState()
  
      const config = {
        headers: {
          'Content-Type':'application/json',
        Authorization:`Bearer ${userInfo.token}`
        },
      }
  
     const{data}= await axios.put(
        `/api/userevent/${product._id}`,{quantity:quantity}, config
      );
      dispatch({
        type: 'PRODUCT_UPDATE_SUCCESS',
        payload:data
      });
  
    } catch (error) {
      dispatch({
          type: 'PRODUCT_UPDATE_FAIL',
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }
  };
  
  // export const updateuserevent = (FormData) => async (dispatch,getState) => {

  //   try {
  //     dispatch({
  //       type: PRODUCT_UPDATE_REQUEST,
  //     });
  
  //     const {userLogin:{userInfo}}=getState()
  
  //     const config = {
  //       headers: {
  //         'Content-Type':'application/json',
  //       Authorization:`Bearer ${userInfo.token}`
  //       },
  //     }
  
  //    const{data}= await axios.put(
  //       // `/api/products/${product._id}`,product, config
  //       `/api/userevent/`,FormData, config
  //     );
  //     dispatch({
  //       type: PRODUCT_UPDATE_SUCCESS,
  //       payload:data
  //     });
  
  //   } catch (error) {
  //     dispatch({
  //         type: PRODUCT_UPDATE_FAIL,
  //         payload:
  //           error.response && error.response.data.message
  //             ? error.response.data.message
  //             : error.message,
  //       })
  //   }
  // };


  // export const productReviewCreate = (productId,review) => async (dispatch,getState) => {

  //   try {
  //     dispatch({
  //       type: PRODUCT_CREATE_REVIEW_REQUEST,
  //     });
  
  //     const {userLogin:{userInfo}}=getState()
  
  //     const config = {
  //       headers: {
  //         'Content-Type':'application/json',
  //       Authorization:`Bearer ${userInfo.token}`
  //       },
  //     }
  
  //     await axios.post(
  //       `/api/products/${productId}/reviews`,review, config
  //     );
  //     dispatch({
  //       type: PRODUCT_CREATE_REVIEW_SUCCESS,
  //     });
  
  //   } catch (error) {
  //     dispatch({
  //         type: PRODUCT_CREATE_REVIEW_FAIL,
  //         payload:
  //           error.response && error.response.data.message
  //             ? error.response.data.message
  //             : error.message,
  //       })
  //   }
  // };


  // export const listTopProducts = () => async (dispatch) => {
  //   try {
  //     dispatch({ type: PRODUCT_TOP_REQUEST});
  
  //     const { data } = await axios.get(`/api/products/top`);
  //     dispatch({
  //       type: PRODUCT_TOP_SUCCESS,
  //       payload: data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: PRODUCT_TOP_FAIL,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     });
  //   }
  // };