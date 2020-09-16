import {THEM_SINH_VIEN,CHINH_SUA_SINH_VIEN,CAP_NHAT_SINH_VIEN} from '../types/QuanLySinhVienType'

export const themSinhVienAction = (sinhVien) =>{
    return {
        type:THEM_SINH_VIEN,
        sinhVien
    }
}

export const chinhSuaSinhVienAction = (sinhVien) =>
    (
        {
            type: CHINH_SUA_SINH_VIEN,
            sinhVien
        }
    )

//{return noiDung} => (noiDung)
//rxaction
// export const actionName = (payload) => ({
//     type: type,
//     payload
// })

export const capNhatSinhVien = (SVCapNhat) => ({
    type: CAP_NHAT_SINH_VIEN,
    SVCapNhat
})
