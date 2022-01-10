module.exports = function toReadable (number) {
  let from0To19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let from0To90 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let stringOfNumber = number.toString().split('');

  function transformBelow100(x) {
    if (x < 20) {
      return `${from0To19[x]}`;
    } else if (x % 10 == 0) {
      return `${from0To90[x / 10]}`;
    } else {
      let stringOfNumber = x.toString().split('').map(item => +item);
      return `${from0To90[stringOfNumber[0]]} ${from0To19[stringOfNumber[1]]}`;
    }
  }

  if (stringOfNumber.length < 3) {
    return transformBelow100(number);
  } else if (number % 100 == 0) {
    return `${from0To19[Number(stringOfNumber[0])]} hundred`;
  } else {
    return `${from0To19[Number(stringOfNumber[0])]} hundred ${transformBelow100(number - (Math.floor(number / 100) * 100))}`;
  }
}