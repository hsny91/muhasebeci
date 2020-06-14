/**
 * "cantonName" isimli dizide tutlan kanton isimleri bu fonksiyon ile option value icine yazdirilir.
 */
function addKantonOptionValue() {
  let KantonNameInformation = kantonName.map((item) => {
    return `<option value=${item} id=${item}>${item}</option>`;
  });
  General.findDomElementById("cantonName").innerHTML = KantonNameInformation;
}
