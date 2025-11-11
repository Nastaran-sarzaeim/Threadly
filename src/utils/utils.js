export function formatPrice(price) {
    if (!price) return "";
  
    const persianNumbers = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
    const englishNumbers = ["0","1","2","3","4","5","6","7","8","9"];
  
    let numberStr = price.toString();
    persianNumbers.forEach((p, i) => {
      const regex = new RegExp(p, "g");
      numberStr = numberStr.replace(regex, englishNumbers[i]);
    });
  
    const number = Number(numberStr);
    if (isNaN(number)) return "";
  
    return number.toLocaleString("fa-IR");
  }
  