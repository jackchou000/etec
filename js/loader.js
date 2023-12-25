$(document).ready(function(){
  $('#load').addClass("loader--hidden");
  $('#load').$('transitionend', ()=> {
    $('#load').remove();
  });
})
