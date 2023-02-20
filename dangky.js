function error(){
    var hotenn = document.getElementById("hoten")
    if(hotenn.value == ""){
        alert("họ tên không được để trống")
        hotenn.style.background = "#660000"
        return
    }else{
        hotenn.style.background = "white"
    }
    var diachi = document.getElementById("diachi")
    if(diachi.value == ""){
        alert("địa chỉ không được để trống")
        diachi.style.background = "#660000"
        return
    }else{
        diachi.style.background = "white"
    }
    var ngaysinh = document.getElementById("ngaysinh")
    if(ngaysinh.value == ""){
        alert("ngày sinh không được để trống")
        ngaysinh.style.background = "#660000"
        return
    }else{
        ngaysinh.style.background = "white"
    }
    var gioitinh = document.getElementById("gioitinh")
    if(gioitinh.value == ""){
        alert("giới tính không được để trống")
        gioitinh.style.background = "#660000"
        return
    }else{
        gioitinh.style.background = "white"
    }
    alert("Đăng nhập thành công@@@")
}