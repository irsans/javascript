function tipedata() {

  var data = '2';
  var datainteger = 2;

  console.log(typeof(data));
  console.log(typeof(datainteger));

//=== (tiga digit untuk mencocokan spesifik tipe data jika kondisi if nya 2 integer tetapi variable nya string akan gagal)
  if (data === 2)
  {
    return 'sukses'
  }
  else
   {
  return 'gagal'
  }
}

console.log(tipedata())
