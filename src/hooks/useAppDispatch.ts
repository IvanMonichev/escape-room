import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/state';


export const useAppDispatch = () => useDispatch<AppDispatch>();
