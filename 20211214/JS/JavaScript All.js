(function ($) {
    $(document).ready(function () {

        //Import Json File
        load_station_json('#sFrom');
        load_station_json('#sTo');

        function load_station_json(xyz) {
            var html_code = '';
            $.getJSON('JSON/stationUTF8.json', function (data) {
                $.each(data, function (key, value) {
                    $(xyz).append('<option value="' + value.id + '">' + String(value.station) + '</option>');
                });
            });
        }

        load_time_json('#toTime');
        load_time_json('#backTime');

        function load_time_json(abc) {
            var html_code = '';
            $.getJSON('JSON/timeUTF8.json', function (data) {
                $.each(data, function (key, value) {
                    $(abc).append('<option value="' + value.id + '">' + String(value.time) + '</option>');
                });
            });
        }

        //課堂練習選項顯示

        var a = 'hello';
        var b = new String('hello!');

        alert(a);
        alert(b);

        var person0 = {};

        person0.name = ['林', '心如'];
        person0.age = 60;
        person0.gender = '女';
        person0.interests = ['音樂', '演戲', '跳舞'];
        person0.bio = function () {
            alert(this.name[0] + '' +
                this.name[1] + '是' +
                this.age + '歲.他喜歡' +
                this.interests[0] + '和' +
                this.interests[1] + '.');
        };
        person0.bio();
        alert(person0.age);

        var person1 = {
            name: ['張', '三封'],
            age: 32,
            gender: '男',
            interests: ['音樂', '遊戲'],
            bio: function () {
                alert(this.name[0] + '' +
                    this.name[1] + '是' +
                    this.age + '歲. 他喜歡' +
                    this.interests[0] + '和' +
                    this.interests[1] + '.');
            },

            greeting: function () {
                alert(this.name[0] + ' ' +
                    this.name[1] + '是' +
                    thia.age + '歲.他喜歡' +
                    this.interests[0] + '和' +
                    this.interests[1] + '.');
            },

            greeting: function () {
                alert('Hi! 我是 ' + this.name[1] + '!');
            }
        };

        person1.bio();
        person1.greeting();

        function PersonB(last, first, age, gender, interests, height, weight) {
            this.name = { '姓': last, '名字': first };
            this.age = age;
            this.height = height;
            this.weight = weight;
            this.gender = gender;
            this.interests = interests;

            this.bio = function () {
                return this.name.姓 + '' +
                    this.name.名字 + ' 是 ' +
                    this.age + ' 歲.他喜歡 ' +
                    this.allInterests() + " " +
                    this.height + '' + ' 公分 ' +
                    this.weight + '' + ' 公斤 ' + ' 標準體重 ' +
                    this.sweight() + ' 公斤 ' + 'BMI為 ' +
                    this.bmi();
            };

            this.bio2 = function () {
                return this.name['姓'] + '' +
                    this.name['名字'] + ' 是 ' +
                    this.age + ' 歲.他喜歡 ' +
                    this.allInterests() + " " +
                    this.height + '' + ' 公分 ' +
                    this.weight + '' + ' 公斤 ' + ' 標準體重 ' +
                    this.sweight() + ' 公斤 ' + 'BMI為 ' +
                    this.bmi();
            }

            this.bmi = function () {
                return (this.weight / ((this.height * 0.01) * (this.height * 0.01))).toPrecision(4);
            }

            this.sweight = function () {
                bg = '';
                if (this.gender == "女") {
                    bg = ((this.height - 70) * 0.6);
                }

                else if (this.gender == "男") {
                    bg = ((this.height - 80) * 0.7);
                }

                return bg;
            }

            this.fullname = function () {
                return this.name['姓'] + ' ' + this.name['名字'];
            }

            this.allInterests = function () {
                a = '';
                b = this.interests.length;
                this.interests.forEach(function (item, i) {
                    a += item
                    if (i < b - 2) {
                        a += ".";
                    }
                    else if (i = b - 2) {
                        a += "和";
                    }
                });

                return a;

            }

            this.greeting = function () {
                return 'Hi! 我是' + this.fullname() + '!' + '我喜歡' + this.allIntetests();
            };
        }

        person3 = new PersonB('Wu', 'Siimba', 10, '男', ['跑步 ', '遊戲 '], 180, 70);
        person4 = new PersonB('吳', '文帝', 12, '女', ['吃', '逛街'], 160, 50);

        //JQuery版
        $("#outArea").append(person3.bio() + "<BR>" + person3.bio2() + "。");
        $("#outArea").append("<BR>" + person4.bio() + "<BR>" + person4.bio2() + "。");

        //JavaScript版
        //document.getElementById('outArea').innerHTML += person3.bio() + "<BR>" + person3.bio2() + "。";
        //document.getElementById('outArea').innerHTML += "<BR>" + person4.bio() + "<BR>" + person4.bio2() + "。";

        //JSON架構分析
        person3Str = JSON.stringify(person3);
        person4Str = JSON.stringify(person4);
        $("#outArea").append("<BR>" + person3Str + "<BR>" + person4Str);

        //系統序號
        var ha = (Math.random() * 100000000000000000);
        $("#OutKey").html("&nbsp&nbsp&nbsp&nbsp" + ha);

        //回程日期顯示
        $("#backTicket").click(function () {
            $("#buyTicketShow").toggle();
        });

        $("#gdata").click(function () {

            //基本資料
            $("#outBasic").html("&nbsp&nbsp&nbsp&nbsp姓名： " + $("#uname").val() + "&nbsp&nbsp&nbsp&nbsp公司： " + $("#ucom").val());

            // 顧客類型
            var cTypeStr = '';

            $("input:checkbox[name=ctype]:checked").each(function () {
                cTypeStr += $("label[for='" + $(this).val() + "']").text() + "／";
            });

            $("#outCust").html("&nbsp&nbsp&nbsp&nbsp" + cTypeStr);

            //起訖站
            //a = $("sFrom").val() + " 是 ";
            var a = $("#sFrom option:selected").text();

            //b = $("sTo").val() + " 是 ";
            var b = $("#sTo option:selected").text();

            $("#outStation").html("&nbsp&nbsp&nbsp&nbsp出發站：" + a + "&nbsp&nbsp&nbsp&nbsp終點站：" + b);

            //車廂種類
            var ca = $("input[type=radio][name=carType]:checked").val();
            var cb = $("label[for='" + ca + "']").text();
            $("#outCarType").html("&nbsp&nbsp&nbsp&nbsp" + cb);

            //座位喜好
            var da = $("input[type=radio][name=theSeat]:checked").val();
            var db = $("label[for='" + da + "']").text();
            $("#outSeatType").html("&nbsp&nbsp&nbsp&nbsp" + db);

            //訂位方式
            var ea = $("input[type=radio][name=TicketBy]:checked").val();
            var eb = $("label[for='" + ea + "']").text();
            $("#outTicketBy").html("&nbsp&nbsp&nbsp&nbsp" + eb);

            //時間
            var fa = $("#toTime option:selected").text();
            $("#outTimeBy").html("&nbsp&nbsp&nbsp&nbsp" + $('#toDate').val() + "&nbsp&nbsp" + fa);

            if ($("#backTicket").is(":checked")) {
                var fa = $("#toTime option:selected").text();
                var fb = $("#backTime option:selected").text();
                $("#outTimeBy").html("&nbsp&nbsp&nbsp&nbsp去程：" + $('#toDate').val() + "&nbsp&nbsp" + fa + "&nbsp&nbsp回程：" + $('#backDate').val() + "&nbsp&nbsp" + fb);
            }

            //購票張數
            var ga = $("#fTicket option:selected").text();
            var gb = $("#hTicket option:selected").text();
            var gc = $("#wTicket option:selected").text();
            var gd = $("#eTicket option:selected").text();
            $("#outBuyType").html("&nbsp&nbsp&nbsp&nbsp全票：" + ga + " 張&nbsp&nbsp&nbsp孩童票：" + gb + " 張&nbsp&nbsp&nbsp愛心票：" + gc + " 張&nbsp&nbsp&nbsp敬老票：" + gd + " 張");

        });

        $("#gdelet").click(function () {
            $("#OutKey").html("");
            $("#outBasic").html("");
            $("#outCust").html("");
            $("#outStation").html("");
            $("#outCarType").html("");
            $("#outSeatType").html("");
            $("#outTicketBy").html("");
            $("#outTimeBy").html("");
            $("#outBuyType").html("&nbsp&nbsp&nbsp&nbsp全票：0&nbsp張&nbsp&nbsp&nbsp孩童票：0&nbsp張&nbsp&nbsp&nbsp愛心票：0&nbsp張&nbsp&nbsp&nbsp敬老票：0&nbsp張");
        });


    });

})(jQuery);
