function panggilunshift()
{
    var kota =['tokyo','nagoya','kyoto','hokkaido'];
    console.log(kota);
    kota.unshift('shirakawago','osaka');
    return kota;
}

console.log(panggilunshift());
