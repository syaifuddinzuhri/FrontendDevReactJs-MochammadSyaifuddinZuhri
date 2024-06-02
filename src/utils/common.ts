import { UseToastOptions } from "@chakra-ui/react";

export function humanizeString(str: string): string {
  return str
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, (m) => m.toUpperCase());
}

export const isObject = (obj: Record<string, unknown>): boolean =>
  obj && obj.constructor.name === "Object";

export const flattenObject = (
  data: never[] | undefined,
  children: string | undefined = "children",
  key: string | undefined = "code"
): Record<string, unknown> => {
  if (data) {
    return data?.reduce((obj, item) => {
      if (item[children]) {
        return Object.assign(obj, {
          [item[key]]: { ...flattenObject(item[children]) },
        });
      }

      return Object.assign(obj, { [item[key]]: item[key] });
    }, {});
  }

  return {};
};

export const handleErrorImage = (event: any) => {
  event.target.src = 'https://docs.juspay.in/images/no-image-found.png';
};

export function mergeArray(arr: any[]): any[] {
  return Object.values(
    [...arr].reduce((result, { id, ...rest }) => {
      // eslint-disable-next-line no-param-reassign
      result[id] = {
        ...(result[id] || {}),
        id,
        ...rest,
      };

      return result;
    }, [])
  );
}

/**
 * @param innerError {object} error.inner from yup catch
 */
export function generateValidationErrors<T = any>(innerError: any): T {
  return innerError.reduce(
    (acc: any, error: any) => ({
      ...acc,
      [error.path]: {
        error: true,
        message: error.message,
      },
    }),
    {}
  );
}

export function generateErrorOptions(err: any, type?: string): UseToastOptions {
  let message = "";

  if (err?.response.data.message) {
    if (Array.isArray(err.response.data.message)) {
      message = err.response.data.message.join("\n");
    } else if (typeof err?.response.data.message === "object") {
      const keys = Object.keys(err?.response.data.message);
      if (keys.length > 0) {
        const firstKey = keys[0];
        const firstArray = err?.response.data.message[firstKey];
        if (Array.isArray(firstArray) && firstArray.length > 0) {
          const firstItem = firstArray[0];
          message = firstItem;
        }
      }
    } else if (typeof err.response.data.message === "string") {
      message = err.response.data.message;
    }
  }

  return {
    title: `${message}`.trim(),
    status: "error",
    variant: "subtle",
    duration: 3000,
    position: "top",
    isClosable: true,
  };
}
