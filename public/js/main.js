document.addEventListener('DOMContentLoaded', (event) => {
    var target = window.location.pathname.split('/')[1]
    //console.log(target)

    if (target) {
        var elements = document.querySelectorAll(".nav-item");
        //console.log(elements)
        elements.forEach.call(elements, function (el) {
            el.classList.remove("active");
        });

        var targetElement = document.querySelectorAll(`#${target}`)[0]
        //console.log(targetElement)
        targetElement.classList.add("active")
    }

})


$(".nav .nav-link").on("click", function () {


    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
    $(".target-class").html($(this).text());
    var selected = $(this).text()
    //console.log("Selected>>>>",selected )
    if (selected != "All Projects") {
        var elements = $(".card").find(".card-body").find("div.row").find("div.proj-type").find("div.text-muted")
        //console.log(elements)
        elements.each(function () {
            $(this).parent().parent().parent().parent().show()
            //console.log("InnerText======",$(this).text())
            //console.log("Selected::::",selected )
            if ($(this).text() != selected) {
                //console.log($(this).parent().parent())
                $(this).parent().parent().parent().parent().hide()
            }
        })
    }
    else {
        var elements = $(".card").find(".card-body").find("div.row").find("div.proj-type").find("div.text-muted")
        elements.each(function () {
            $(this).parent().parent().parent().parent().show()
        }
        )
    }

});


