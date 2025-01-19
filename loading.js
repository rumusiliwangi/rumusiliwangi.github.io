let count = 0;
let loading = document.getElementById('loading');
let valueShow = document.getElementById('value-show');

loading.onclick = function(){
    if(count != 0){
        return;
    }
    count = 0;
    startLoading();
}

function startLoading(){
    if(count == 100){
        valueShow.innerHTML = "Finish";
        count = 0;
        // Mengarahkan ke halaman website tertentu setelah loading selesai
        window.location.href = 'utama.html'; // Ganti dengan URL yang diinginkan
        return;
    }else{
        count = count + 1;
        valueShow.innerHTML = count + '%';
        loading.style.setProperty("--loading-value", count + '%');

        setTimeout(startLoading, 50);
    }
}
