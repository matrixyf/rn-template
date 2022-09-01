/*
 * @Author: Hong.Zhang
 * @Date: 2022-09-01 20:59:22
 * @Description:
 */
export function fetchCount(s: string): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: s });
    }, 2000);
  });
}
