function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("show");
}

document.addEventListener("click", function (event) {
    const nav = document.getElementById("navMenu");
    const button = document.querySelector(".menu-toggle");

    if (nav && button && !nav.contains(event.target) && !button.contains(event.target)) {
        nav.classList.remove("show");
    }
});

document.getElementById("formPesanan").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const produk = document.getElementById("produk").value;
    const jumlah = document.getElementById("jumlah").value;
    const alamat = document.getElementById("alamat").value;
    const catatan = document.getElementById("catatan").value;

    const nomorTujuan = "6289661951290";

    const pesan =
        "HALO SINGKONG KEJU KENTI!\n\n" +
        "Saya ingin melakukan pemesanan:\n\n" +
        "Nama: " + nama + "\n" +
        "Nomor WhatsApp: " + whatsapp + "\n" +
        "Produk: " + produk + "\n" +
        "Jumlah: " + jumlah + "\n" +
        "Alamat: " + alamat + "\n" +
        "Catatan: " + (catatan || "-") + "\n\n" +
        "Terima kasih!";

    const url = "https://wa.me/" + nomorTujuan + "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
});
