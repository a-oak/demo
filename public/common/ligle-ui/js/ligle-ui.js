
$(document).ready(function(){
  $(".switch-mode").click(function(){
    $(".mode-cellphone").toggle();
    $(".mode-email").toggle();
  });
  $("[type='text']").addClass('form-control');
  $("[type='password']").addClass('form-control');
  $("[type='submit']").addClass('form-control');
  $("[type='checkbox']").addClass('ligle-checkbox');

  $("[href]").addClass('ligle-a');
});