const tab1 = $('#tab-1')
const tab2 = $('#tab-2')
const tab3 = $('#tab-3')
const tab4 = $('#tab-4')
const tabSign1 = $("#tabs-sign-1")
const tabSign2 = $("#tabs-sign-2")
const tabSign3 = $("#tabs-sign-3")
const tabSign4 = $("#tabs-sign-4")


// tab1.on('click', function(e){
//   e.preventDefault()
//   $('.accordion-content').hasClass("show").toggle()
//   $('#accordion-content-1').toggle()
// })
//
// tab2.on('click', function(e){
//   e.preventDefault()
//   $('#accordion-content-2').toggle()
// })
//
// tab3.on('click', function(e){
//   e.preventDefault()
//   $('#accordion-content-3').toggle()
// })
//
// tab4.on('click', function(e){
//   e.preventDefault()
//   $('#accordion-content-4').toggle()
// })

tab1.on('click',function(e){
  e.preventDefault()
  if($('#accordion-content-1').hasClass('content-show')){
    $('#accordion-content-1').addClass('content-hide')
    $('#accordion-content-1').removeClass('content-show')
    tab1.removeClass('tab-active')
    tab1.addClass('tab-inactive')
    // tabSign1.text="+"
    tabSign1.html("+")
  }else{
    tabSign1.html("-")
    tabSign2.html("+")
    tabSign3.html("+")
    tabSign4.html("+")

    tab1.removeClass('tab-inactive')
    tab1.addClass('tab-active')
    tab2.addClass('tab-inactive')
    tab2.removeClass('tab-active')
    tab3.addClass('tab-inactive')
    tab3.removeClass('tab-active')
    tab4.addClass('tab-inactive')
    tab4.removeClass('tab-active')
    $('#accordion-content-1').addClass('content-show')
    $('#accordion-content-2').removeClass('content-show')
    $('#accordion-content-3').removeClass('content-show')
    $('#accordion-content-4').removeClass('content-show')
    $('#accordion-content-2').addClass('content-hide')
    $('#accordion-content-3').addClass('content-hide')
    $('#accordion-content-4').addClass('content-hide')
    $('#accordion-content-1').removeClass('content-hide')
  }
})

tab2.on('click',function(e){
  e.preventDefault()
  if($('#accordion-content-2').hasClass('content-show')){
    $('#accordion-content-2').addClass('content-hide')
    $('#accordion-content-2').removeClass('content-show')
    tab2.removeClass('tab-active')
    tab2.addClass('tab-inactive')
    tabSign2.html("+")
  }else{
    tabSign2.html("-")
    tabSign1.html("+")
    tabSign3.html("+")
    tabSign4.html("+")
    tab2.removeClass('tab-inactive')
    tab2.addClass('tab-active')
    tab1.addClass('tab-inactive')
    tab1.removeClass('tab-active')
    tab3.addClass('tab-inactive')
    tab3.removeClass('tab-active')
    tab4.addClass('tab-inactive')
    tab4.removeClass('tab-active')
    $('#accordion-content-2').addClass('content-show')
    $('#accordion-content-1').removeClass('content-show')
    $('#accordion-content-3').removeClass('content-show')
    $('#accordion-content-4').removeClass('content-show')
    $('#accordion-content-1').addClass('content-hide')
    $('#accordion-content-3').addClass('content-hide')
    $('#accordion-content-4').addClass('content-hide')
    $('#accordion-content-2').removeClass('content-hide')
  }
})

tab3.on('click',function(e){
  e.preventDefault()
  if($('#accordion-content-3').hasClass('content-show')){
    $('#accordion-content-3').addClass('content-hide')
    $('#accordion-content-3').removeClass('content-show')
    tab3.removeClass('tab-active')
    tab3.addClass('tab-inactive')
    tabSign3.html("+")
  }else{
    tabSign3.html("-")
    tabSign2.html("+")
    tabSign1.html("+")
    tabSign4.html("+")
    tab3.removeClass('tab-inactive')
    tab3.addClass('tab-active')
    tab2.addClass('tab-inactive')
    tab2.removeClass('tab-active')
    tab1.addClass('tab-inactive')
    tab1.removeClass('tab-active')
    tab4.addClass('tab-inactive')
    tab4.removeClass('tab-active')
    $('#accordion-content-3').addClass('content-show')
    $('#accordion-content-2').removeClass('content-show')
    $('#accordion-content-1').removeClass('content-show')
    $('#accordion-content-4').removeClass('content-show')
    $('#accordion-content-2').addClass('content-hide')
    $('#accordion-content-1').addClass('content-hide')
    $('#accordion-content-4').addClass('content-hide')
    $('#accordion-content-3').removeClass('content-hide')
  }
})

tab4.on('click',function(e){
  e.preventDefault()
  if($('#accordion-content-4').hasClass('content-show')){
    $('#accordion-content-4').addClass('content-hide')
    $('#accordion-content-4').removeClass('content-show')
    tab4.removeClass('tab-active')
    tab4.addClass('tab-inactive')
    tabSign4.html("+")
  }else{
    tabSign4.html("-")
    tabSign2.html("+")
    tabSign3.html("+")
    tabSign1.html("+")
    tab4.removeClass('tab-inactive')
    tab4.addClass('tab-active')
    tab2.addClass('tab-inactive')
    tab2.removeClass('tab-active')
    tab3.addClass('tab-inactive')
    tab3.removeClass('tab-active')
    tab1.addClass('tab-inactive')
    tab1.removeClass('tab-active')
    $('#accordion-content-4').addClass('content-show')
    $('#accordion-content-2').removeClass('content-show')
    $('#accordion-content-3').removeClass('content-show')
    $('#accordion-content-1').removeClass('content-show')
    $('#accordion-content-2').addClass('content-hide')
    $('#accordion-content-3').addClass('content-hide')
    $('#accordion-content-1').addClass('content-hide')
    $('#accordion-content-4').removeClass('content-hide')
  }
})






// tab2.on('click',toggleContent(e))
// tab3.on('click',toggleContent(e))
// tab4.on('click',toggleContent(e))
