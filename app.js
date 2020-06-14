/**
 * Bu aplikasyon kullanicidan isim, soyisim ve kanton bilgilerini alir ve bunlari yonetir.
 *
 * AKIS
 * Kulanici form araciligi ile yeni kisiler olusturabilir ve bu kisiler bir tabloya eklenir.
 * Her yeni kullanicinin tabloya eklenmesi ile tablo sifirlanir.
 * Kullanici verilen input alanlarinin hepsini doldurmak zorundadir.
 * Tablo mevcut verilere gore A-Z'ye veya Z-A'ya siralanabilir.
 * Ayrica kullanici isim ve soyisim bilgilerini ayri ayri arama butonu ile arayabilir.Arama sonucu sadece kriterlere uygun veriler tabloda gosterilir.
 *
 * ANALIZ KISMI
 * Ekranda isim,soyisim ve kanton bilgileri girilecek 3 adet input alani olmali ve bunlar bir buton ile kayit edilmeli.
 * Ekranda arama yapabilecegim bir input alani ve butonu olmali.
 * Isim,soyisim ve kanton bilgilerini tutacak bir Class olusturulur.
 * Genel isleri(input alanina yazilan bilgilerin okunmasi,verilen id ile dom üzerinden ilgili nesneyi bulunmasi gibi) yapacak metotlara sahip bir class olusturulur.
 * Save butonuna basildiginda Input alaninindaki bilgileri alan,classa aktaran,classtan bir arraya aktaran, arraydaki bilgileri tabloya yazdiran, input alanlarinin bos olup olmadigini kontrol eden,bilgilerin tabloya yazdirilidiktan sonra input alanini bosaltan metotlara sahip bir Class olusturlur.
 *Arama yapilabilmesi icin olusturlan alana girilin bilgileri tablodaki kisiler ile karsilastirilir ve uygun kisi tabloda gosterebilen metota sahip bir class olusturulur.
 * Uzerine tiklandiginda isim,soyisim ve kanton bilgileri alfabetik olarak ve ters olarak siralayabilen metoda sahip bir class olusturulur. (ilk tiklamada alfabetik ikincisinde tersi seklinde)
 */

addKantonOptionValue(); // "cantonName" isimli dizide tutulan kanton isimlerinin ekrana yazdirilmasi
ClickSaveInformation.addEventListenerToButton(); // save butonuna tiklandiginda input alanina girilen bilgiler arraya aktarilir,tabloya yazilir,input alanlarinin bos olup olmamasi kontrol edilir, kayit sonrasi input alani bosaltilir.
Search.clickFilterNameLastName(); // bu metod cagirilarak; tabloda isim, soyisime gore arama yapilabilmektedir.(isim soyisim birlikte yazilmadigi ya ismin ya da soyismin yazildigi aramalar yapilir.)
Sort.sortAlphabetically(); // isim, soyisim ve kantona gore alfabetik ve tersi siralama yapilir.(ilk tik A'dan Z'ye siralama,ikinci tik Z'den A'ya siralama)
