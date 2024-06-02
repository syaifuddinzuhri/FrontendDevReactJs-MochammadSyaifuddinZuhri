export function formatToRupiah(value: number) {
  let price: any;
  price = "Rp " + value?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return price;
}

export const generateRandom12DigitNumber = (): string => {
  const min = 100000000000;
  const max = 999999999999;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber.toString();
};
