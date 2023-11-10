import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const FetAllProduct = createAsyncThunk('nameFetAllProduct',async()=>{
    const response = await axios.get('https://dummyjson.com/todos')
    let {data}=response
    console.log(data)
    return{
        data
    }
})

const initialState = {
  isLoding:false,
  isError:false,
  data:[]
}

export const getproductslice = createSlice({
    name: 'getproductslice',
    initialState,
    extraReducers:builder=>{
        builder.addCase(FetAllProduct.pending,(state,action)=>{
            state.isLoding=true
        })
        builder.addCase(FetAllProduct.fulfilled,(state,action)=>{
            state.data=action.payload.data
        })
        builder.addCase(FetAllProduct.rejected,(state)=>{
            state.isError=true
        })
      
    }
  
  })

  export default getproductslice.reducer;