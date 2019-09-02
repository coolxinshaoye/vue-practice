$(function() {
    //1、全选 全部选功能模块
    // 触发全选/全不选功能，上下各一个全选框分类名的类名 为checkall
    // 就是把全选按钮（checkall）的状态赋值给 J-checkbox’
    //事件可以使用change
    $(".checkall").change(function() {
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item")
        } else {
            $(".cart-item").removeClass("check-cart-item")
        }
    });

    //2.如果小复选框被全部选中，那么全选框也应该被选中
    $(".j-checkbox").change(function() {
        //如果小幅选框勾选的length 全等于 小复选框的length
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            //那么全选按钮勾checked
            $(".checkall").prop("checked", true);
        } else {
            // 否则不勾上
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            // 让当前的商品添加 check-cart-item 类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }

    });
    // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val(); //n 为点击加号后 itxt的值
        n++;
        $(this).siblings(".itxt").val(n);
        // 小计模块，根据输入的数量乘以单价，得出小计
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);

        p = p.substr(1)
            // console.log(p);

        var price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum()
    });
    // 4. 增减商品数量模块 首先声明一个变量，当我们点击-号（increment），就让这个值++，然后赋值给文本框。
    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        // 小计模块，根据输入的数量乘以单价，得出小计
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        var price = (p * n).toFixed(2)
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price)
        getSum()
    });
    //5.用户修改文本框里面的值乘以商品单价
    $('.itxt').change(function() {
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        var price = (p * n).toFixed(2)
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price)
        getSum()
    });
    //5.计算总数和总额
    getSum()

    function getSum() {
        var count = 0; // 计算总件数 
        var money = 0; // 计算总价钱
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
            console.log(count);
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }
    //6.删除商品模块
    //（1）商品栏后面的删除按钮
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    });
    //(2)删除选中商品
    // 删除的是小的复选框选中的商品
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    //(3)删除全部商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
})