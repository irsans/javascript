function panggilshift()
{
  var kota = ['jakarta','bandung','tangerang','tokyo'];
  console.log(kota);
  console.log("=================");

  var kota2 = kota.shift()
  console.log(kota2);
  // kota = kota.shift();
  return kota;
}
//panggilshift()
console.log(panggilshift());
