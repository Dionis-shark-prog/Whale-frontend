document.querySelectorAll('.quantity').forEach(input => {
   input.addEventListener('input', calculateSum)
});
function calculateSum() {
   let totalPrice = 0;
   const prices = document.querySelectorAll(".price");
   let quantity = document.querySelectorAll(".quantity");

   prices.forEach((price, i) => {
      const priceValue = parseFloat(price.textContent);
      const quantityValue = parseFloat(quantity[i].value);
      totalPrice += priceValue * quantityValue;
   });

   document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}
window.onload = calculateSum;

document.querySelectorAll('#quantity').forEach(element => {
   element.addEventListener('change', ({ target }) => {
      const maxCount = parseInt(target.getAttribute('maxAttr'), 10);

      if (target.value < 1) {
         target.value = 1;
      } else if (target.value > maxCount) {
         target.value = maxCount;
      }
   });
});