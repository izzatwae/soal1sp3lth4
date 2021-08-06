function newCallback(nama1, nama2, pulangKampung){

    console.log(nama1, nama2)
    pulangKampung()
}

function myCallback(){
    console.log("pulang Kampung")
}

newCallback("adi", "yusuf", myCallback)