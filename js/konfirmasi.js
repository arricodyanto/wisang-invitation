//<![CDATA[
$(document).on('click','.send_form', function(){
var input_blanter1 = document.getElementById('nama');
var input_blanter2 = document.getElementById('konfirmasi');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '6285156637671',
    header = 'Halo om, saya ',
    footer = ' ingin mengkonfirmasi bahwa kami *',
    footer2 = '* dalam acara ulang tahun Wisang. Terimakasih',
    text_yes = 'Pesan Terkirim.',
    text_no = 'Harap Isi Semua Form!';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" !=  input_blanter1.value && input_blanter2.value){

    /* Call Input Form */
var input_nama = $("#nama").val(),
    input_konfirmasi = $("#konfirmasi :selected").text();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + header1 + '%0A' + header
    + input_nama + footer + input_konfirmasi + footer2 + '%0A';

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<div class="yes alert alert-success">'+text_yes+'</div>';
} else {
document.getElementById("text-info").innerHTML = '<div class="no alert alert-warning">'+text_no+'</div>';
}
});
//]]>