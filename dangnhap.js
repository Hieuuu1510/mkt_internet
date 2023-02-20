function kiemtra(){
    var ten = document.getElementById("taikhoan")
    if(ten.value == ""){
        alert("tên không được để trống")
        ten.style.background = "#CC0000"
        return false;
    }else{
        ten.style.background = "white"
    }
    var mk = document.getElementById("matkhau")
    if(mk.value == ""){
        alert("mật khẩu kkhông được để trống")
        mk.style.background = "#CC0000"
        return false;
    }else{
        mk.style.background = "white"
    }
    alert("Đăng nhập thành công!!!")
}