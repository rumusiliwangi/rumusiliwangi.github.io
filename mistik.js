// Data tersembunyi dalam HTML (misalnya berdasarkan angka yang dimasukkan)
const dataTersimpan = {
  0: "185769",
  1: "076458",
  2: "567987",
  3: "898676",
  4: "759195",
  5: "240814",
  6: "921303",
  7: "412032",
  8: "303521",
  9: "634240",
};

// Fungsi untuk menampilkan hasil berdasarkan input angka
function tampilkanHasil() {
  const angka = document.getElementById("angkaInput").value;
  const hasil = dataTersimpan[angka];

  if (hasil) {
    document.getElementById("result").innerText = hasil;
  } else {
    document.getElementById("result").innerText =
      "Gak kerasa, masukinya salah Mas!";
  }
}

// Fungsi untuk membersihkan kolom input dan hasil
function clearInput() {
  document.getElementById("angkaInput").value = "";
  document.getElementById("result").innerText = "";
}

// Event listeners
document.getElementById("teangan").addEventListener("click", tampilkanHasil);
document.getElementById("clearButton").addEventListener("click", clearInput);
