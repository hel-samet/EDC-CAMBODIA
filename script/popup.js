alert("ស្វាគមន៏មកកាន់ អគ្គីសនីកម្ពុជា");

var names = prompt("បញ្ចូលឈ្មោះរបស់អ្នក:");
_("txtcustomer").value = names;

var phones = prompt("បញ្ចូលលេខទូរស្ទព័របស់អ្នក (+855):");
_("txtphone").value = phones;

var olds = prompt("បញ្ចូលលេខកុងទ័រចាស់របស់អ្នក:");
_("txtold").value = olds;

var news = prompt("បញ្ចូលលេខកុងទ័រថ្មីរបស់អ្នក");
_("txtnew").value = news;

var trashs = confirm("តើអ្នកចង់បញ្ចូលការបង់ថ្លៃសំរាមទេ?");
if (trashs == true) {
  _("trash").innerHTML = "10000រៀល";
} else if (trashs == false) {
  _("trash").innerHTML = "0រៀល";
}

var confirms = confirm("តើអ្នកចង់ទូទាត់អីឡូវទេ?");
if (confirms == true) {
  _("cal").addEventListener("click", Calculate());
}

