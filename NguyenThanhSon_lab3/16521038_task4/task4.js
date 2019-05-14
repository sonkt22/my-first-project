var today = new Date();
var hour = today.getHours();
function timer() {
    var x = setInterval(function dongho() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();

        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;
    }, 1000);
}
function checktime() {
    let buoisang = "buổi sáng";
    let buoitrua = "buổi trưa";
    let buoichieu = "buổi chiều";
    let buoitoi = "buổi tối"
    if (hour >= 3 && hour <= 10) {
        document.getElementById("thanhngu").innerHTML = "Sứ mệnh chân chính của con người là sống, chứ không phải tồn tại."
        return buoisang;
    }
    else if (hour >= 11 && hour < 13) {
        document.getElementById("thanhngu").innerHTML = "Muốn thực hiện được những việc lớn, thì phải sống như là không bao giờ chết được."
        return buoitrua;
    }
    else if (hour >= 13 && hour < 18) {
        document.getElementById("thanhngu").innerHTML = "Bước vào cuộc đời là bước vào cuộc chiến đấu."
        return buoichieu;
    }
    else if (hour >= 18 && hour < 24) {
        document.getElementById("thanhngu").innerHTML = "Khát vọng vươn lên phía trước, đó chính là mục đích cuộc sống."
        return buoitoi;
    }
    else if (hour >= 0 && hour < 3) {
        document.getElementById("thanhngu").innerHTML = "Tôi tin vào tình bạn hơn là tình yêu.";
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
function countdownDate() {
    var thangsinhchuan = Number(checkthangsinh());
    var ngaysinhchuan = Number(checkngaysinh());
    // Thiết lập thời gian đích mà ta sẽ đếm
    var countDownDate = new Date((today.getFullYear() + 1), (thangsinhchuan - 1), ngaysinhchuan).getTime();
    // cập nhập thời gian sau mỗi 1 giây
    var x = setInterval(function () {

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
        if (ngaysinhchuan == today.getDate() && thangsinhchuan == today.getMonth() + 1){
            document.getElementById("infor").innerHTML= "";
        }
        else {
            document.getElementById("infor").innerHTML = days + " Ngày " + hours + " Giờ "
                + minutes + " Phút " + seconds + " Giây ";
        }

        // Nếu thời gian kết thúc, hiển thị chuỗi thông báo
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("infor").innerHTML = "Chúc mừng sinh nhật bạn.";
        }
    }, 1000);
}
function inputinfor() {
    var thangsinhchuan = Number(checkthangsinh());
    var ngaysinhchuan = Number(checkngaysinh());
    var countDownDate = new Date((today.getFullYear() + 1), (thangsinhchuan - 1), ngaysinhchuan).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
    if (days >= 365)
        days = days - 366;
    let div = document.getElementById("message");
    let div1 = document.getElementById("countdown");
    let anthe = document.getElementById("form-group");
    let anbutton = document.getElementById("btnXN");
    let input = document.getElementById("inputname").value;
    let namsinh = Number(checknamsinh());
    let tuoi = today.getFullYear() - namsinh;
    let tuoimoi = tuoi + 1;
    if (input != "") {
        // anthe.style.display = 'none';
        // anbutton.style.display = 'none';
        document.getElementById("form-group").style.display = 'none';
        document.getElementById("btnXN").style.display = 'none';
        document.getElementById("message").style.display = 'block';
        document.getElementById("countdown").style.display = 'block';
        document.getElementById("infor").style.display = 'block';
        document.getElementById("thanhngu").style.display = 'block';
        countdownDate();
        let buoi = checktime();
        div.innerHTML = "Chào " + buoi + ", " + input;
        if (days == 0)
            div1.innerHTML = "Chúc mừng sinh nhật tuổi " + tuoimoi;
        else
            div1.innerHTML = "Bạn đang ở tuổi " + tuoi + " và còn " + days
                            + " ngày nữa sẽ đến sinh nhật thứ " + tuoimoi + " " + "của bạn ";
    }
}
function an(){
    document.getElementById("message").style.display = 'none';
    document.getElementById("countdown").style.display = 'none';
    document.getElementById("infor").style.display = 'none';
    document.getElementById("thanhngu").style.display = 'none';
}
function hien(){
    document.getElementById("form-group").style.display = 'block';
    document.getElementById("btnXN").style.display = 'block';

}
function undo(){
    an();
    hien();
    clearInterval(x);
}
