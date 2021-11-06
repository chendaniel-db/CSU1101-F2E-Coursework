//試算顯示 JS
function fnOrder() {

    var selName, txtQty, divshow, qty, price, total, imgName, seltype, title, stype, add, unti
    selName = document.getElementById("selName");
    seltype = document.getElementById("seltype");
    txtQty = document.getElementById("txtQty");
    divshow = document.getElementById("divshow");

    qty = txtQty.value;
    tp = seltype.value

    add = parseFloat(seltype.value)
    unti = parseFloat(selName.value)
    price = Math.floor(add * unti)

    total = qty * price;

    stype = seltype.options[seltype.selectedIndex].innerHTML
    title = selName.options[selName.selectedIndex].innerHTML

    imgName = selName.options[selName.selectedIndex].text + ".jpg";
    altName = selName.options[selName.selectedIndex].text;

    divshow.innerHTML +=
        "<tr> <td align='center' valign='middle'>" + stype +
        "</td> <td align='center' valign='middle'>" + title +
        "</td> <td align='center' valign='middle'>" + tp +
        "</td> <td align='center' valign='middle'>" + unti +
        "</td> <td align='center' valign='middle'>" + price +
        "</td> <td align='center' valign='middle'>" + qty +
        "</td> <td align='center' valign='middle' class='subtotal'>" + total +
    "</td> <td align='center' valign='middle'>" + "<a href='img/Map/" + imgName + "' + target='_blank'> <img src='img/Map/" + imgName + "' width='150px' height='100px'+ alt='" + altName + " 景 觀 圖'>" +
        "</td> <td align='center' valign='middle'> <button type='button' class='btn btn-outline-danger position-relative btn-bg' onclick='fnDelet(this)' style='width:auto;'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg><font style='vertical-align:inherit;'> 刪 除 Delet</font></button>" +
        "</td>" + "</tr>";
}

//刪除單行 JS
function fnDelet(thebutton) {
    therow = thebutton.parentNode.parentNode;
    therow.remove();
}

//清空試算 JS
function fnClean() {
    var divshow
    divshow = document.getElementById("divshow");
    divshow.innerHTML = "";
}

//現在時間 JS
function ShowTime() {
    var NowDate = new Date();
    var d = NowDate.getDay();
    var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    document.getElementById('showbox').innerHTML = '系統時間：' + NowDate.toLocaleString() + '（' + dayNames[d] + '）';
    setTimeout('ShowTime()', 1);
}

//F5 JS
function fnF5() {
    window.location.reload();
}

//計算總額 jQuery
$("#cal").click(function () {
    var total = 0;
    $(".subtotal").each(function () {
        total += parseInt($(this).text())
    });
    $('#total').text(total + ' 元整');
});


//回到頂端 jQuery
$(function () {
    $('#BackTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 333);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#BackTop').fadeIn(222);
        } else {
            $('#BackTop').stop().fadeOut(222);
        }
    }).scroll();
});

//IP位置 jQuery
$.getJSON("https://ipinfo.io", function (response) {
    $("#myip").html('<i class="bi bi-globe"></i> 您目前IP地址為&ensp;' + response.ip + ' 並使用SSL進行傳輸！' + '<br>' + '<i class= "bi bi-exclamation-triangle"></i> 本網頁之所有素材皆用於教育用途，不得進行商業化之使用！' + '<br>' + '<i class="bi bi-exclamation-octagon"></i> 請勿隨意使用沒有安全性之網路，以免傳輸過程中發生資料外洩！');
})

//Loding Time JS 
const loadingEl = document.querySelector(".loading");
const loadingNumEl = document.querySelector(".loading-num");
const restartBtn = document.querySelector(".restart-btn");

let num = 0;

const showLoading = () => {
    loadingEl.classList.add("active");
    window.loadingInterval = setInterval(() => {
        num++;

        if (num <= 100) loadingNumEl.textContent = num;
        else clearInterval(loadingInterval);
    }, 18);
};

const hideLoading = () => loadingEl.classList.remove("active");

const clearLoadingNum = (e) => {
    const isLodingShow = [...loadingEl.classList].includes("active");
    const { propertyName } = e;

    if (propertyName === "visibility" && !isLodingShow) {
        num = 0;
    }
};

const requestBack = () => {
    setTimeout(() => {
        hideLoading();
        clearInterval(loadingInterval);
    }, 2000);
};

const init = () => {
    showLoading();
    requestBack();
};

init();

restartBtn.addEventListener("click", init);
loadingEl.addEventListener("transitionend", clearLoadingNum);
