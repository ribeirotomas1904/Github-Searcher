import { configureStore } from '@reduxjs/toolkit'
import * as reducer from './slices';

export default configureStore({ reducer });
