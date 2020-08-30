import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {
    //State
    state = {
        gioHang: [
            // {maSP:1, tenSP:'Note 7',hinhAnh: './img/sp_note7.png', soLuong:1, giaBan:1000}
        ]
    }
    themGioHang = (spClick)=>{
        //Tạo 1 sản phẩm giỏ hàng từ sản phẩm được click
        let spGioHang = {
            maSP : spClick.maSP,
            tenSP : spClick.tenSP,
            hinhAnh : spClick.hinhAnh,
            giaBan : spClick.giaBan,
            soLuong : 1
        }
        let gioHangUpDate = this.state.gioHang;
        //Tìm sản phẩm có trong giỏ hàng không
        let  index = gioHangUpDate.findIndex(spGH => spGH.maSP === spGioHang.maSP);
        if(index !== -1){
            //Tìm thấy tại vị trí index
            gioHangUpDate[index].soLuong +=1;
        }
        else{
            //Không tìm thấy trong giỏ hàng thì push vào mảng
            gioHangUpDate.push(spGioHang)
        }
        this.setState({
            gioHang:gioHangUpDate
        })
    }
    tinhSoLuongGioHang = () =>{
        return this.state.gioHang.reduce((soLuong,spGH,index)=>{
            return soLuong += spGH.soLuong;
        },0)
    }
    xoaGioHang = (maSP)=>{

        //Cách 1 dùng findIndex
        // let gioHangUpDate = this.state.gioHang;
        // //Timf xem trong giỏ hàng có mã sp đc click(nút xóa) không?
        // let index = gioHangUpDate.findIndex(spGH => spGH.maSP === maSP);
        // if(index !== 1){
        //     gioHangUpDate.splice(index,1)
        // }
        // //SAu khi xóa sp giỏ hàng thì cập nhật lại state
        // this.setState({
        //     gioHang : gioHangUpDate
        // })

        //cach 2 dùng hàm filter
        this.setState({
            gioHang : this.state.gioHang.filter(sp => sp.maSP !== maSP)
        })
    }
    tangGiamSoLuong = (maSP,tangGiam) => {//tangGiam = true => tăng, tangGiam = false thì giảm
        console.log(maSP,tangGiam);
        let gioHangUpDate = this.state.gioHang;
        let index = gioHangUpDate.findIndex(spGH => spGH.maSP === maSP);
        if(index !== -1){
            if(tangGiam) {
                gioHangUpDate[index].soLuong +=1;

            } 
            else{
                //Nếu sản phẩm giảm thì số lượng > 1 mới cho giảm
                if(gioHangUpDate[index].soLuong > 1){
                    gioHangUpDate[index].soLuong -= 1;
                }
                else{
                    alert ('Không thể giảm số lượng thêm nữa')
                }
            }
        }
        
        this.setState({
            gioHang : gioHangUpDate
        })
    }

    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
        ]
    
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="gioHang">
                    <div className="text-right text-danger">
                        <span data-toggle="modal" data-target="#modelId" style={{cursor:'pointer'}}>Giỏ hàng ({this.tinhSoLuongGioHang()})</span>
                    </div>
                    <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}/>
                </div>
                
                <DanhSachSanPham mangSanPham={this.mangSanPham} themGioHang={this.themGioHang}/>
            </div>
        )
    }
}
