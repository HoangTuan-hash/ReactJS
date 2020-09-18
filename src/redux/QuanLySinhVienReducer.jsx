import {THEM_SINH_VIEN,CHINH_SUA_SINH_VIEN,CAP_NHAT_SINH_VIEN} from './types/QuanLySinhVienType'

const initialState = {
    mangSinhVien: [
        {maSinhVien:1, tenSinhVien:'Nguyễn Văn A', soDienThoai:123123123, email:'nguyenvana@gmail.com'},
        {maSinhVien:2, tenSinhVien:'Nguyễn Văn B', soDienThoai:123123155, email:'nguyenvanb@gmail.com'}
    ],
    sinhVienSua:{//state thong tin sinh vien trên ô input
        maSinhVien:'',
        tenSinhVien:'',
        soDienThoai:'',
        email:''
    }
}
//hhhhhhhhhhhhhh
export default (state = initialState, action ) => {
    switch (action.type) {
        case THEM_SINH_VIEN:{
            console.log(action.sinhVien);
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return {...state}
        }
        case CHINH_SUA_SINH_VIEN:{
            //thayddooir state.sinhVienSua = sinhVien khi người dùng click chỉnh sửa
            state.sinhVienSua = action.sinhVien;
            return {...state}
        }
        case CAP_NHAT_SINH_VIEN:{
            let mangSinhVienCapNhat = [...state.mangSinhVien]
            let index = mangSinhVienCapNhat.findIndex(sv => sv.maSinhVien === action.SVCapNhat.maSinhVien)
            if(index !== -1){
                mangSinhVienCapNhat[index] = {...action.SVCapNhat}
            }
            state.mangSinhVien = mangSinhVienCapNhat;
            return {...state}
        }
    
    default:
        return {...state}
    }
}
