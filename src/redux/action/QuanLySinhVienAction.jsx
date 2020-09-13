import {THEM_SINH_VIEN} from '../types/QuanLySinhVienType'

export const themSinhVienAction = (sinhVien) =>{
    return {
        type:THEM_SINH_VIEN,
        sinhVien
    }
}