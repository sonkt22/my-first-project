var today = new Date();
var hour = today.getHours();
function checkgt() {
    let check = document.getElementsByName("gioitinh");
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
            return check[i].value;
        }
    }
}
function checktime() {
    let buoisang = "buổi sáng";
    let buoitrua = "buổi trưa";
    let buoichieu = "buổi chiều";
    let buoitoi = "buổi tối"
    if (hour >= 3 && hour <= 10) {
        return buoisang;
    }
    else if (hour >= 11 && hour < 13) {
        return buoitrua;
    }
    else if (hour >= 13 && hour < 18) {
        return buoichieu;
    }
    else if (hour >= 18 && hour < 24) {
        return buoitoi;
    }
    else if (hour >= 0 && hour < 3) {
        return buoitoi;
    }
}
function getMaxDay(thang) {
    switch (thang) {
        case 1: {
            return 31;
            break;
        }
        case 2: {
            if ((today.getFullYear() - 2016) % 4 == 0) {
                return 29;
                break;
            }
            else {
                return 28
                break;
            }
        }
        case 3: {
            return 31;
            break;
        }
        case 4: {
            return 30;
            break;
        }
        case 5: {
            return 31;
            break;
        }
        case 6: {
            return 30;
            break;
        }
        case 7: {
            return 31;
            break;
        }
        case 8: {
            return 31;
            break;
        }
        case 9: {
            return 30;
            break;
        }
        case 10: {
            return 31;
            break;
        }
        case 11: {
            return 30;
            break;
        }
        case 12: {
            return 31;
            break;
        }
    }
}
function checknamsinh() {
    var x = document.getElementById("year").selectedIndex;
    var y = document.getElementById("year").options;
    var namsinh = y[x].value;
    return namsinh;
}
function checkthangsinh() {
    var thangsinh = document.getElementById("month").value;
    return thangsinh;
}
function checkngaysinh() {
    var ngaysinh = document.getElementById("day").value;
    return ngaysinh;
}
function tinhNgay() {
    var thangsinhchuan = Number(checkthangsinh());
    var ngaysinhchuan = Number(checkngaysinh());
    var ngayconlaitrongthang = getMaxDay(today.getMonth() + 1) - today.getDate();
    var daytoiSN = 0;
    var daytoiSN1 = 0;
    var daytoiSN2 = 0;
    if (thangsinhchuan > (today.getMonth() + 1)) {
        for (i = today.getMonth() + 2; i < thangsinhchuan; i++) {
            daytoiSN += getMaxDay(i);
            console.log(thangsinhchuan);
        }
        daytoiSN = daytoiSN + ngayconlaitrongthang + ngaysinhchuan;
    }
    else if (thangsinhchuan < (today.getMonth() + 1)) {
        for (i = today.getMonth() + 2; i <= 12; i++) {
            daytoiSN1 += getMaxDay(i);
            console.log(daytoiSN1);
        }
        for (i = 1; i < thangsinhchuan; i++) {
            daytoiSN2 += getMaxDay(i);
            console.log(daytoiSN2);
        }
        daytoiSN = daytoiSN1 + daytoiSN2;
        daytoiSN = daytoiSN + ngayconlaitrongthang + ngaysinhchuan;
    }
    else if (thangsinhchuan == (today.getMonth() + 1)) {
        if (ngaysinhchuan == today.getDate())
            daytoiSN = 0;
        else if (ngaysinhchuan > today.getDate())
            daytoiSN = ngaysinhchuan - today.getDate();
        else if (ngaysinhchuan < today.getDate()) {
            if ((today.getFullYear() - 2016) % 4 == 0)
                daytoiSN = 366 - (today.getDate() - ngaysinhchuan);
            else
                daytoiSN = 365 - (today.getDate() - ngaysinhchuan);
        }
    }

    console.log("kq=" + daytoiSN);
    return daytoiSN;
}
function countdownDate() {
    let namsinh = Number(checknamsinh());
    var thangsinhchuan = Number(checkthangsinh());
    var ngaysinhchuan = Number(checkngaysinh());
    // Thiết lập thời gian đích mà ta sẽ đếm
    var countDownDate = new Date((today.getFullYear() + 1), (thangsinhchuan - 1), ngaysinhchuan).getTime();
    // cập nhập thời gian sau mỗi 1 giây
    
        // Lấy thời gian hiện tại
        var now = new Date().getTime();
        // alert(now);

        // Lấy số thời gian chênh lệch
        var distance = countDownDate - now;
        // alert(distance);

        // Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (days >= 365)
            days = days - 366;
        if (days < 0)
            document.getElementById("result2").innerHTML = "Chúc mừng sinh nhật bạn."
        else {
            document.getElementById("result2").innerHTML = days + " Ngày " + hours + " Giờ "
                + minutes + " Phút " + seconds + " Giây ";
        }

        // Nếu thời gian kết thúc, hiển thị chuỗi thông báo
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("result2").innerHTML = "Chúc mừng sinh nhật bạn.";
        }
   
}
var x = setInterval(function () {
    countdownDate();
}, 1000);
function inputinfor() {

    var thangsinhchuan = Number(checkthangsinh());
    var ngaysinhchuan = Number(checkngaysinh());
    var countDownDate = new Date((today.getFullYear() + 1), (thangsinhchuan - 1), ngaysinhchuan).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let input = document.getElementById("hoten");
    let div = document.getElementById("result");
    let div1 = document.getElementById("result1");
    let div2 = document.getElementById("result2");
    let namsinh = Number(checknamsinh());
    let tuoi = today.getFullYear() - namsinh;
    let tuoimoi = tuoi + 1;
    var ngaydenSN = days + 1;
    if (ngaydenSN >= 365)
        ngaydenSN = ngaydenSN - 366;

    if (input != null) {
        let gt = checkgt() == "Nam" ? "anh" : "chị";
        let buoi = checktime();
        countdownDate();
        div.innerHTML = "Xin chào " + buoi + " " + gt + " " + input.value + ".";
        div1.innerHTML = gt + " " + "đang ở tuổi " + tuoi + " và còn" + " " + ngaydenSN
            + " ngày nữa sẽ đến sinh nhật thứ " + tuoimoi + " " + "của " + gt + ".";
    }
}