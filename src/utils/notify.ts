import { toast } from 'vue3-toastify';

export default function showNotify(text: string) {
  toast(text, {
    hideProgressBar: true,
    closeButton: false,
    autoClose: 1000,
    transition: 'flip',
    position: 'bottom-right',
  });
}
