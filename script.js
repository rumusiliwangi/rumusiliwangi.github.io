    // Data tersembunyi dalam HTML (misalnya berdasarkan angka yang dimasukkan)
    const dataTersimpan = {
	0: '1346-2579',
        1: '2457-3608',
        2: '3568-1479',
        3: '4679-2508',
        4: '5780-1369',
        5: '6891-2047',
	6: '7902-1358',
        7: '8013-2469',
        8: '9124-3057',
        9: '2035-1468',
    };

    // Fungsi untuk menampilkan hasil berdasarkan input angka
    function tampilkanHasil() {
        const angka = document.getElementById('angkaInput').value;
        const hasil = dataTersimpan[angka];

        if (hasil) {
            document.getElementById('result').innerText = hasil;
        } else {
            document.getElementById('result').innerText = 'Hanya masukan satu angka saja.';
        }
    }

    // Fungsi untuk membersihkan kolom input dan hasil
    function clearInput() {
        document.getElementById('angkaInput').value = '';
        document.getElementById('result').innerText = '';
    }

    // Event listeners
    document.getElementById('okButton').addEventListener('click', tampilkanHasil);
    document.getElementById('clearButton').addEventListener('click', clearInput);
