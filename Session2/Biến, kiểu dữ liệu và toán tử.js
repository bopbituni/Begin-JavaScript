function tinhTrungBinh(){
    let vatLy = Number(document.getElementById("vatly").value);
    let hoaHoc= Number(document.getElementById("hoahoc").value);
    let sinhHoc= Number(document.getElementById("sinhhoc").value);
    let diemTrungBinh = (vatLy + hoaHoc + sinhHoc)/3;
        alert("DIEM TRUNG BINH LA:" +diemTrungBinh);

}

