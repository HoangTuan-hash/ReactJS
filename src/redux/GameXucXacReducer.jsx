//Tỏ chứ reducer đẻ lưu trữ và xửa lý state của bài tập game xúc xắc
const mangXucXac = [
    {ma:1, hinhAnh:'./img/gameXucXac/1.png'},
    {ma:2, hinhAnh:'./img/gameXucXac/2.png'},
    {ma:3, hinhAnh:'./img/gameXucXac/3.png'},
    {ma:4, hinhAnh:'./img/gameXucXac/4.png'},
    {ma:5, hinhAnh:'./img/gameXucXac/5.png'},
    {ma:6, hinhAnh:'./img/gameXucXac/6.png'},
]

const stateDefault = {
    banChon : true,
    soBanThang:0,
    tongSoBanChoi:0,
    mangXucXac:[
        {ma:1, hinhAnh:'./img/gameXucXac/1.png'},
        {ma:3, hinhAnh:'./img/gameXucXac/3.png'},
        {ma:6, hinhAnh:'./img/gameXucXac/6.png'}
    ]
}
export const gameXucXacReducer = (state = stateDefault,action) => {
    switch(action.type){
        case 'DAT_CUOC_TAI_XIU' : {
            state.banChon = action.ketQuaChon
            return {...state}
        }
        case'PLAY_GAME' : {
            //Tạo ra 3 viên xúc xắc ngẫu nhiên add vào mảng xúc xắc ngẫu nhiên
            let mangXucXacNgauNhien = [];
            //Tthực hiện ramdom 3 lần để tạo ra 3 viên xúc xắc ngẫu nhiên đưa vào mảng
            for(let i =0; i< 3; i++){
                let soNgauNhien = Math.floor(Math.random() * 6)
                let xucXacNgauNhien = mangXucXac[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
             //Cập nhật lại state.mangXucXac
            state.mangXucXac = mangXucXacNgauNhien;
            
            //caaph nhật số bàn chơi
            state.tongSoBanChoi +=1;
            //Tính điểm từ mangXucXacNgauNhien
            let tongDiem = mangXucXacNgauNhien.reduce((tongDiem,xucXac,index)=>{
                return tongDiem += xucXac.ma;
            },0);
            //So sanh tongDiem
            
            if((tongDiem > 9 && state.banChon) || (tongDiem <= 9 && !state.banChon)){
                state.soBanThang +=1;
            }
            return {...state};
        }
       
        
        
    }
    return {...state};
}