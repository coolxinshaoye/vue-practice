$(function() {
    //全选功能模块
    //（1）点击全选按钮，小复选框全部勾上 ，最底下的全选按钮也勾上
    $(".checkall").change(function() {
        //把全选按钮（checkall）的状态赋值给 J-checkbox’
        //       prop 括号里面的第一个checked 是属性，不是属性值  ，逗号后面的才是属性值
        // $（this）.prop（“checked”）是获取checkall的值
        $(".checkall,.j-checkbox").prop("checked", $(this).prop("checked"))
    });
    // 小复选框被全部选中，则全选框也应该被选中
    $(".j-checkbox").change(function() {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else(
            $(".checkall").prop("checked", false)
        )
    });
    // 2.增减商品数量模块
    //点击+号，商品数量加1
    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        //小计模块
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        var price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum()
    });
    // 点击-号 ，商品数量减1
    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        // 小计模块
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        var price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum()
    });
    //小计模块
    // 用户修改文本框里的数值*商品单价
    $(".itxt").change(function() {
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        var price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum()
    });
    // 总计和总价格
    getSum();

    function getSum() {
        var count = 0;
        var money = 0;

        $(".itxt").each(function(i, ele) {
            // console.log(i);
            // console.log(ele); 
            //  parseInt($(ele).val()) itxt里面的值
            count += parseInt($(ele).val());
        })
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele) {
            // parseFloat($(ele).text().substr(1))  循环遍历商品的价格，并相加；
            money += parseFloat($(ele).text().substr(1))
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }
    // 商品后面的删除按钮
    $(".p-action").click(function() {
        $(this).parents("cart-item").remove();
        getSum();
    });
    //删除选中的商品
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    //清除全部商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
})