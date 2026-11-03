const danhSachSan = [
  { ma: "S5-01", ten: "San 5 nguoi so 1", gia: 300000 },
  { ma: "S5-02", ten: "San 5 nguoi so 2", gia: 320000 },
  { ma: "S7-01", ten: "San 7 nguoi so 1", gia: 450000 },
  { ma: "S7-02", ten: "San 7 nguoi so 2", gia: 500000 },
];

function hienThiBangGiaSan() {
  const bang = document.getElementById("bang-gia");
  for (const san of danhSachSan) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = san.ma;
    dong.insertCell().textContent = san.ten;
    dong.insertCell().textContent = san.gia.toLocaleString("vi-VN");
  }
}

hienThiBangGia();
