import { computed, ref } from "vue"

const cart = ref({
  items:[] as cartItem[]
})
export const useCart = () => {
  const addToCart=(product:product) => {
    const item = cart.value.items.find(item => item.productId === product.id)
    if(item){
      updateQuantity(item,item.quantity+1)
    }else{
      cart.value.items.push(
        { productId: product.id,
         quantity: 1,
         name: product.name,
         price: product.price,
       }
       )
    }
    
  }

  const updateQuantity = async (item: cartItem, quantity: number) => {
    item.quantity = quantity
  }

  const totalProduct = computed(() => {
    return cart.value.items.reduce((acc,item) => {
      return acc+item.quantity
    },0)
  })
  const removeFormCart= (product:cartItem) => {
    const index =  cart.value.items.findIndex(item => item.productId === product.productId)
    if(index > -1){
      cart.value.items.splice(index,1)
    }
  }

  const isEmpty = computed(() =>  cart.value.items.length === 0)
return {
  cart,
  addToCart,
  totalProduct,
  updateQuantity,
  removeFormCart,
  isEmpty
}
}