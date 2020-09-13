import {THEM_SINH_VIEN} from './types/QuanLySinhVienType'

const initialState = {
    mangSinhVien: [
        {maSinhVien:1, tenSinhVien:'Nguyễn Văn A', soDienThoai:123123123, email:'nguyenvana@gmail.com'},
        {maSinhVien:2, tenSinhVien:'Nguyễn Văn B', soDienThoai:123123155, email:'nguyenvanb@gmail.com'}
    ]
}

export default (state = initialState, action ) => {
    switch (action.type) {
        case'THEM_SINH_VIEN':{
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return {...state}
        }
    
    default:
        return state
    }
}
