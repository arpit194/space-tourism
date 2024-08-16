import { create } from "zustand";

type NavbarState = {
  isOpen: boolean;
  onToggle: () => void;
};

const useNavbar = create<NavbarState>((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useNavbar;
