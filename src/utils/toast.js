import { toast } from 'react-hot-toast';

const toastify = ({ message, type = 'success' }) => {
  return toast(message, {
    type,
    position: 'bottom-center',
    duration: 2000,
  });
};

export default toastify;
