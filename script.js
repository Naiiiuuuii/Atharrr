// عرض نموذج التبرع عند النقر على "تبرع"
function showDonationForm() {
    document.getElementById("donationForm").style.display = "block";
    document.getElementById("sellingForm").style.display = "none";
}

// عرض نموذج البيع عند النقر على "بيع"
function showSellingForm() {
    document.getElementById("sellingForm").style.display = "block";
    document.getElementById("donationForm").style.display = "none";
}

// إرسال تفاصيل التبرع
function submitDonation() {
    const deviceName = document.getElementById("donationDeviceName").value;
    const deviceDetails = document.getElementById("donationDetails").value;
    if (deviceName && deviceDetails) {
        alert("تم إرسال التبرع بنجاح!");
        // يمكنك هنا إضافة الشيفرة لإرسال البيانات إلى الخادم أو تخزينها في قاعدة بيانات
    } else {
        alert("يرجى ملء جميع الحقول");
    }
}

// إرسال تفاصيل البيع
function submitSelling() {
    const deviceName = document.getElementById("sellingDeviceName").value;
    const deviceDetails = document.getElementById("sellingDetails").value;
    if (deviceName && deviceDetails) {
        alert("تم إرسال تفاصيل البيع بنجاح!");
        // يمكنك هنا إضافة الشيفرة لإرسال البيانات إلى الخادم أو تخزينها في قاعدة بيانات
    } else {
        alert("يرجى ملء جميع الحقول");
    }
}
