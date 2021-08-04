const initialState = {
  products: [
    {
      id: "sp_1",
      name: "iphoneX",
      price: 3000,
      screen: "screen_1",
      backCamera: "backCamera_1",
      frontCamera: "frontCamera_1",
      img: "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
      desc: "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      id: "sp_2",
      name: "Note 7",
      price: 2000,
      screen: "screen_2",
      backCamera: "backCamera_2",
      frontCamera: "frontCamera_2",
      img: "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png",
      desc: "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
    },
    {
      id: "sp_3",
      name: "Vivo",
      price: 1100,
      screen: "screen_3",
      backCamera: "backCamera_3",
      frontCamera: "frontCamera_3",
      img: "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg",
      desc: "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      id: "sp_4",
      name: "Blacberry",
      price: 1300,
      screen: "screen_4",
      backCamera: "backCamera_4",
      frontCamera: "frontCamera_4",
      img: "https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg",
      desc: "BlackBerry is a line of smartphones, tablets, and services originally designed",
    },
  ],
  selectedProduct: null,
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECT_PRODUCT":
      state.selectedProduct = action.payload;
      return { ...state };
    case "ADD_TO_CART":
      const cloneCart = [...state.cart];

      const foundIndex = cloneCart.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (foundIndex === -1) {
        action.payload.quantity = 1;

        cloneCart.push(action.payload);
      } else {
        cloneCart[foundIndex].quantity++;
      }
      return {
        ...state,
        cart: cloneCart,
      };
    case "DECREASE_QUANTITY":
      const cloneCart3 = [...state.cart];

      const foundIndex3 = cloneCart3.findIndex((item) => {
        return item.id === action.payload;
      });
      if(cloneCart3[foundIndex3].quantity<=1){
        cloneCart3[foundIndex3].quantity=0;
      }else{
        cloneCart3[foundIndex3].quantity--;
      }

      return {
        ...state,
        cart: cloneCart3,
      };
    case "INCREASE_QUANTITY":
      const cloneCart2 = [...state.cart];

      const foundIndex2 = cloneCart2.findIndex((item) => {
        return item.id === action.payload;
      });

      cloneCart2[foundIndex2].quantity++;

      return {
        ...state,
        cart: cloneCart2,
      };
    case "MAKE_PAYMENT":
      return {
        ...state,
        cart: [],
      };
    case "DELETE_ITEM_CART":
      const cloneCart4 = [...state.cart];

      const foundIndex4 = cloneCart4.findIndex((item) => {
        return item.id === action.payload;
      });

      cloneCart4.splice(foundIndex4,1);
      return {
        ...state,
        cart: cloneCart4,
      };
    default:
      return state;
  }
};

export default reducer;
