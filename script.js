$(document).ready(function () {
  $('.loan-calculator__item-calculate').on('click', calc);
  $('.loan-calculator__item-reset').on('click', reset);
  let result = 0;
  function calc() {
    let rate = $('.loan-calculator__rate').val();
    let loanAmount = $('.loan-calculator__loan-amount').val();
    let months = $('.loan-calculator__months').val();
    result = rate * loanAmount + loanAmount / months;
    if (Number.isInteger(result)) {
      $('.loan-calculator__err').hide();
    } else {
      $('.loan-calculator__err').show();
    }

    $('.loan-calculator__result').val(result);
  }
  function reset() {
    $('.loan-calculator__rate').val(0.007);
    $('.loan-calculator__loan-amount').val(100000);
    $('.loan-calculator__months').val(50);
  }
});
