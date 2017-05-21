/**
 * Created by ET on 2017/5/19.
 */
$("#jsi-nav").sidebar({
    trigger: ".jsc-sidebar-trigger",
    scrollbarDisplay: true,
    pullCb: null,
    pushCb: null
});

$("#sidebar-close").on("click", function (e) {
    e.preventDefault();
    $("#jsi-nav").data("sidebar").push();
    console.log("clicked!");
});

