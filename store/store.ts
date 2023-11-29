import { create } from "zustand";

interface storeType{
    isCartVisible: boolean,
    isActive: boolean,
    setIsActive: (value:boolean)=> void,
    setCartVisible: (value:boolean)=> void

}
const store = create<storeType>((set) => ({
    isCartVisible: false,
    isActive: false,
    setIsActive: (value: boolean) => set(()=> ({isActive: value})),
    setCartVisible: (value: boolean) => set(() => ({ isCartVisible: value })),
  }))

export default store;