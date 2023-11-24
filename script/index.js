function _(obj) {
  return document.getElementById(obj);
}

function Calculate() {
  var total = parseFloat(_("txtnew").value) - parseFloat(_("txtold").value);

  _("name").innerHTML = _("txtcustomer").value;
  _("phone").innerHTML = "(+855)" + _("txtphone").value;
  _("old").innerHTML = _("txtold").value + "Kw";
  _("inew").innerHTML = _("txtnew").value + "Kw";
  _("totalkw").innerHTML = total + "Kw";
  Totals();
}
function validate() {
  if (txttrash.checked == 1) {
    _("trash").innerHTML = "10000រៀល";
  } else if (txttrash.checked == 0) {
    _("trash").innerHTML = "0រៀល";
  }
}
function Totals() {
  var total = parseFloat(_("txtnew").value) - parseFloat(_("txtold").value);
  let grandTotal;
  if (total > 0 && total <= 50) {
    grandTotal = total * 500;
  } else if (total >= 51 && total <= 100) {
    grandTotal = total * 1000;
  } else if (total >= 101 && total <= 150) {
    grandTotal = total * 1500;
  } else if (total >= 151 && total <= 200) {
    grandTotal = total * 2000;
  } else {
    grandTotal = total * 2500;
  }

  if (txttrash.checked == 1) {
    const resultTotal = grandTotal + 10000 + "រៀល";
    return (_("total").innerHTML = resultTotal);
  } else {
    const resultTotal = grandTotal + "រៀល";
    return (_("total").innerHTML = resultTotal);
  }

}

function Del() {
  _("txtcustomer").value = "";
  _("txtphone").value = "";
  _("txtold").value = "";
  _("txtnew").value = "";
  _("txttrash").value = "";

  _("name").innerHTML = "...";
  _("phone").innerHTML = "(+855)";
  _("old").innerHTML = "0Kw";
  _("inew").innerHTML = "0Kw";
  _("trash").innerHTML = "0រៀល";
  _("total").innerHTML = "0រៀល";
  txttrash.checked = 0;
}

//Calculator

const input = document.getElementById("display");
document.getElementById("dot").addEventListener("click", () => {
  if (input.value.includes(".")) return;
  input.value += ".";
});
