function tienTe() {
    let d = Number(document.getElementById("a").value);
    let v = document.getElementById("b").value;
    let s = document.getElementById("c").value;
    let quydoi = parseInt((d * s) / v);
    document.getElementById("sotien").innerHTML = quydoi;
}
