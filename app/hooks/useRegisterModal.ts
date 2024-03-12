import {create} from 'zustand'

interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set)=> ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => ({isOpen: false})

}))

export default useRegisterModal