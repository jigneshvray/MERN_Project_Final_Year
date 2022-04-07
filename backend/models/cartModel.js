import mongoose from 'mongoose'

const cartSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
          },
          
    }
)

const Cart = mongoose.model('Cart', cartSchema)

export default Cart
