/* Bài 1: 
Đầu vào: số ngày làm
Xử lý: 
- tạo biến và tính tien_luong
- trả kết quả
Đầu ra: tiền lương
*/
function bai1_tinhluong(){
    var tien_luong =document.getElementById("bai1_so_ngay_lam").value*100000;
    document.getElementById("bai1_ket_qua").innerText=`Tiền lương là ${tien_luong} VND`;    
}
/* Bài 2: 
Đầu vào: 5 số thực
Xử lý: 
- tạo biến gán giá trị 5 số thực
- tính trung bình
- trả kết quả
Đầu ra: số trung bình
*/
function bai2_tinhtrungbinh(){
    var num1=document.getElementById("bai2_num1").value*1;
    var num2=document.getElementById("bai2_num2").value*1;
    var num3=document.getElementById("bai2_num3").value*1;
    var num4=document.getElementById("bai2_num4").value*1;
    var num5=document.getElementById("bai2_num5").value*1;
    var trungbinh=(num1+num2+num3+num4+num5)/5;
    document.getElementById("bai2_ket_qua").innerText=`Trung bình 5 số là ${trungbinh}`;
}
/* Bài 3: 
Đầu vào: số tiền USD
Xử lý: 
- tạo biến và tính số tiền VND
- trả kết quả
Đầu ra: số tiền VND
*/
function bai3_tinhtienvnd(){
    var tienvnd=document.getElementById("bai3_usd").value*23500;
    document.getElementById("bai3_ket_qua").innerText=new Intl.NumberFormat('vn-VN').format(tienvnd)+" VND";
}
/* Bài 4: 
Đầu vào: chiều dài, chiều rộng
Xử lý: 
- tạo biến và gán chiều dài chiều rộng
- tính diện tích và chu vi
- trả kết quả
Đầu ra: diện tích, chu vi
*/
function bai4_tinhdientichchuvi(){
    var chieudai=document.getElementById("bai4_chieudai").value*1;
    var chieurong=document.getElementById("bai4_chieurong").value*1;
    var dientich=chieudai*chieurong;
    var chuvi=(chieudai+chieurong)*2;
    document.getElementById("bai4_ket_qua").innerText=`Diện tích: ${dientich}, chu vi: ${chuvi}`;
}
/* Bài 5: 
Đầu vào: số có 2 chữ số
Xử lý: 
- tạo biến và gán số hàng chục và số hàng đơn vị
- tính tổng của biến hàng chục và hàng đơn vị
- trả kết quả
Đầu ra: tổng 2 ký số
*/

function bai5_tinhtong2kyso(){
    var so2chuso=document.getElementById("bai5_so2chuso").value*1;    
    var hangchuc=Math.floor(so2chuso/10);
    var hangdonvi=so2chuso%10;
    var tong2kyso=hangchuc+hangdonvi;
    document.getElementById("bai5_ket_qua").innerText=`Tổng 2 ký số là ${tong2kyso}`;
}