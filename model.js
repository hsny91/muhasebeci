let sortDescend = true; // siralama ve tersine siralama yaparken kullanilan degisken.
let customerInformation = new Array(); // Class kullanilarak yapilan yeni arrayin tanimlanmasi
let cantonName = new Array();
cantonName = [
  "AG","AI","AR","BE","BL","BS","FR","GE","GL","GR","JU","LU","NE","NW","OW","SG","SH","SO","SZ","TG","TI","UR","VD","VS","ZG","ZH",
];
/**
 *  Isim,soyisim ve kanton bilgilerini tutan class.Input alanindan okunan bilgiler once bu classa daha sonra bir diziye aktarilir.
 */
class Information {
  constructor(firstName, lastName, canton) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.canton = canton;
  }
}
/**
 *  Bu class 2 metoda sahiptir."findDomElementById" ile verilen id ile dom üzerinden ilgili nesneyi bulunmasi saglanir.
 *  "readInputValue" ile (input alanina yazilan bilgilerin okunmasi saglanir.
 */
class General {
  constructor(pId) {
    this.pId = pId;
  }
  static findDomElementById(pId) {
    return document.querySelector(`#${pId}`);
  }
  static readInputValue(pId) {
    let inputElement = General.findDomElementById(pId);
    return inputElement.value;
  }
}
/**
 * bu class'ta "checkInputText" metodu ile input alanlarinin bos olup olmadigi kontrol edilir. Bos olmasi durumunda ekrana uyari yazisi gelir ve class'taki diger metodlarin calsitirlmasi durdurulur. Alanlarin dolu olmasi durumunda ise ayni classta bulunan diger metodlarin calismasina izin verilir.
 * "addInputToArray" metodu ile input alanindan alinan bilgiler once "Information" classina daha sonra classtan yeni olusturulan "customerInformation" dizisine aktarilir.
 * "renderCustomerInformation" metodu ile arraydaki bilgiler ekrana yazdirilir.
 * "resetAllInputField" metodu ile bilgilerin tabloya kayit edilmesi ile input alanlarini bosaltir.
 * "addEventListenerToButton" metodu ile save butonuna basilmasi ile yukaridaki metodlar calisir.
 */
class ClickSaveInformation {
  static checkInputText() {
    if (General.readInputValue("firstName") == "" ||General.readInputValue("lastName") == "" ||General.readInputValue("cantonName") == "" ) {
      General.findDomElementById("errorMessage").innerHTML ="Please enter the requested information completely";
      return false;
    }
    General.findDomElementById("errorMessage").innerHTML = "";
    return true;
  }
  static addInputToArray() {
    let nameInformation = General.readInputValue("firstName");
    let lastNameInformation = General.readInputValue("lastName");
    let cantonNameInformation = General.readInputValue("cantonName");
    let pushCustomerInformation = new Information(nameInformation,lastNameInformation,cantonNameInformation);
    customerInformation.push(pushCustomerInformation);
  }
  static renderCustomerInformation(pArrayName) {
    let renderCustomerInformation = pArrayName.map((item) => {
        return `<tr>
        <td id=${item.firstName}>${item.firstName}</td>
        <td id=${item.lastName}>${item.lastName}</td>
        <td id=${item.canton}>${item.canton}</td>
        </tr>`;
      })
      .join("");
    General.findDomElementById("customerInformation").innerHTML = renderCustomerInformation;
  }
  static resetAllInputField() {
    General.findDomElementById("firstName").value = "";
    General.findDomElementById("lastName").value = "";
    General.findDomElementById("cantonName").value = "";
  }
  static addEventListenerToButton() {
    General.findDomElementById("saveButton").addEventListener("click",function (event) {
        if (ClickSaveInformation.checkInputText()) {
          ClickSaveInformation.addInputToArray();
          ClickSaveInformation.renderCustomerInformation(customerInformation);
          ClickSaveInformation.resetAllInputField();
        }
      }
    );
  }
}
/**
 * Bu class ile "searchButton" idli butona basildiginda input alanina yazilan isim ve soyisime gore ayri ayri arama yapilabilir. Kriterlere uygun veri bulundugunda bu veri ekrana yazdirilir.
 */
class Search {
  static clickFilterNameLastName() {
    General.findDomElementById("searchButton").addEventListener("click",filterNameLastName);
    function filterNameLastName() {
      let searchValue = General.readInputValue("searchName");
      let search = customerInformation.filter((item) => {
        if (item.firstName == searchValue || item.lastName == searchValue)
          return item;
      });
      ClickSaveInformation.renderCustomerInformation(search);
    }
  }
}
/**
 * Bu class'ta musteri bilgileri A-Z ve Z-A seklinde siralanabilmketedir.Isim ,soyisim veya kanton ilk tiklandiginda sizi A-Z seklinde siralanir ve sortDescend degiskeni(yukarida true olarak tanimlanmistir.) false olur. ikinci tiklandiginda ise bilgiler Z-A seklind siralanir.
 */
class Sort {
  static clickSortArray(pId, pSort) {
    General.findDomElementById(pId).addEventListener("click", function (event) {
      let sortAlphabetic = customerInformation.sort((a, b) => {
        if (sortDescend) {
          return a[pSort] > b[pSort] ? 1 : -1;
        } else return a[pSort] < b[pSort] ? 1 : -1;
      });
      sortDescend = !sortDescend;
      ClickSaveInformation.renderCustomerInformation(sortAlphabetic);
    });
  }
  static sortAlphabetically() {
    Sort.clickSortArray("firstNameTitle", "firstName");
    Sort.clickSortArray("lastNameTitle", "lastName");
    Sort.clickSortArray("cantonNameTitle", "canton");
  }
}
