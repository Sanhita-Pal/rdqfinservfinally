
    var _CONTENT = ["thoda aage badho, kuch aacha karo!", "thoda aage badho, kuch aacha karo!", "thoda aage badho, kuch aacha karo!", "thoda aage badho, kuch aacha karo!"];
    var _PART = 0;
    var _PART_INDEX = 0;
    var _INTERVAL_VAL;
    var _ELEMENT = document.querySelector("#text");
    function Type() {
        var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;
        if (text === _CONTENT[_PART]) {
            clearInterval(_INTERVAL_VAL);
            setTimeout(function () {
                _INTERVAL_VAL = setInterval(Delete, 150);
            }, 3000);
        }
    }
    function Delete() {
        var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;
        if (text === '') {
            clearInterval(_INTERVAL_VAL);
            if (_PART == (_CONTENT.length - 1))
                _PART = 0;
            else
                _PART++;
            _PART_INDEX = 0;
            setTimeout(function () {
                _INTERVAL_VAL = setInterval(Type, 150);
            }, 2000);
        }
    }
    _INTERVAL_VAL = setInterval(Type, 100);


    function cal() {
        var ammount = parseInt($('#amntinp').val());
        var dur = parseInt($('#durinp').val());
        var roi = parseFloat($('#roiinp').val());
        var interest = ammount * dur * (roi / 100);
        var emi = Math.floor((interest + ammount) / (dur * 12));;
        $("#emiout2").html(emi);
        $("#amntout2").html(ammount);
        $("#durout2").html(dur * 12);
    }
    $(document).ready(function () {
        $(document).on('input change', '#amntinp', function () {
            $('#amntout').html($(this).val());
            cal();
        });

        $(document).on('input change', '#durinp', function () {
            $('#durout').html(parseInt($(this).val()) * 12);
            cal();
        });

        $(document).on('input change', '#roiinp', function () {
            $('#roiout').html($(this).val());
            cal();
        });
        $(document).on('input change', '#amntinpmob', function () {
            $('#amntoutmob').html($(this).val());
            calmob();
        });

        $(document).on('input change', '#durinpmob', function () {
            $('#duroutmob').html(parseInt($(this).val()) * 12);
            calmob();
        });

        $(document).on('input change', '#roiinpmob', function () {
            $('#roioutmob').html($(this).val());
            calmob();
        });

    });


    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


    function calmob() {
        var ammount = parseInt($('#amntinpmob').val());
        var dur = parseInt($('#durinpmob').val());
        var roi = parseFloat($('#roiinpmob').val());
        var interest = ammount * dur * (roi / 100);
        var emi = Math.floor((interest + ammount) / (dur * 12));;
        $("#emiout2mob").html(emi);
        $("#amntout2mob").html(ammount);
        $("#durout2mob").html(dur * 12);
    }
