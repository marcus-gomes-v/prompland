export function xorCipher(text: string, key: string): string {
  let result = '';
  for (let i = 0, j = 0; i < text.length; i++, j++) {
    if (j >= key.length) j = 0;
    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(j));
  }
  return result;
}

export function encodeWithKey(text: string, key: string): string {
  const cipherText = xorCipher(text, key);
  const utf8Data = unescape(encodeURIComponent(cipherText));
  return btoa(utf8Data);
}

export function decodeWithKey(base64String: string, key: string): string {
  const utf8Data = atob(base64String);
  const cipherText = decodeURIComponent(escape(utf8Data));
  return xorCipher(cipherText, key);
}
