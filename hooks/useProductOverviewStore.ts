// src/stores/useProductOverviewStore.ts
import { create } from 'zustand';

interface ProductOverviewState {
  selectedProducts: string[];
  addProduct: (product: string) => void;
  removeProduct: (product: string) => void;
}

const useProductOverviewStore = create<ProductOverviewState>((set) => ({
  selectedProducts: [],
  addProduct: (product) =>
    set((state) => ({
      selectedProducts: [...state.selectedProducts, product],
    })),
  removeProduct: (product) =>
    set((state) => ({
      selectedProducts: state.selectedProducts.filter((p) => p !== product),
    })),
}));

export default useProductOverviewStore;
