export default function toogleCheckPrice(price) {
  let dataPrice = "";
  let error = "";

  if (price.match(/^[1-9][0-9]*$/)) {
    dataPrice = price;
  } else {
    dataPrice = "";
    error = "You need to write the right price";
  }
  console.log(dataPrice);
  console.log(error);
  return { price: dataPrice, error: error };
}
