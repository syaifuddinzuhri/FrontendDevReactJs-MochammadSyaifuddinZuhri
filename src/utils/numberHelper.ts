export function formatPrice(num?: number, isRp: Boolean = true) {
  let price: any;

  if (isRp) {
    price = "Rp" + num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  } else {
    price = num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  if (price == "RpNaN")
    price = 0;

  return price
}

export function formatNumber(num?: number) {
  return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export const errorManagemet = async (errorx: any) => {
  let message: string[] = [];
  try {
    Object.entries(errorx.response.data.message)?.forEach(
      (datafetch: any, index) => {
        datafetch[1].forEach((x: string) => {
          message.push(x);
        });
      }
    );
  } catch (error: any) {
    message.push(errorx.response.data.message);
  }
  return message;
}
