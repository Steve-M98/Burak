// VALIDATION:

// FRONTEND VALIDATION,
// PIPE VALIDATION ( Serverga kirish frn bkn oralig'idagi ),
// BACKEND VALIDATION,
// DATABASE VALIDATION;

// ENUM ==> Oldindan belgilangan QAT'IY Qiymatlar ketma ketligi  ( ENUMERATION )

/* Project Standards:
- Logging standards
- Naming standards:
     function, method, variable = CAMEL
     class => PASCAL
     folder => KEBAB
     CSS => SNAKE
- Error handling

*/

// Architectural pattern: MVC, Dependency Injection, MVP

// Design pattern: Middleware, Decotar

// COOKIE xususiyatlari
// Request join, => har bir requstga yopishib oladi
// Self destroy, =>  ma'lum vaqtdan keyin o'zini o'zi o'ldiradi

/** ********************************************** */

/* 
TASK L

So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.

Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc" */

/*

function taskL(str) {
  return str
    .split(" ") // so'zlarga ajratadi ("") va (" ") farqi 2 si so'zga ajratdi probelga qarab
    .map((word) => word.split("").reverse().join(""))
    .join(" "); // ("") va (" " ) bu ham shunday probelga qarab qayta birlashtiradi
}

console.log(taskL("Men bugundan Burak loyihasini boshladim")); */

/** ********************************************** */

/* 
TASK M

Array ichidagi har bir raqam uchun raqamning o'zi va uning kvadratidan tashkil topgan object hosil qilib qaytarsin.

Masalan: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, ...] */

// let arr [4,2,1,6,];
/*
function taskM(arr) {
  return arr.map((num) => {
    return {
      raqam: num,
      kvadrat: num ** 2,
    };
  });
}

console.log(taskM([2, 5, 6, 8, 9]));  */

/** ********************************************** */

/* 
TASK N

Stringni palindrom ekanligini aniqlab true yoki false qaytarsin.

Masalan: palindromCheck("dad") return true */

/*
function taskN_palind(task: string) {
  return task === task.split("").reverse().join(""); // return qilyatganda birinchi holatidagi task ga === dan keyingi holati teng bolsa true beradi
}

console.log(taskN_palind("dad")); // true
console.log(taskN_palind("hello")); // false  */

/** ********************************************** */

/*
TASK O

Array ichidagi har xil qiymatlardan faqat sonlar yig'indisini hisoblab qaytarsin.

Masalan: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45. */
/*

function taskO(arr: any) {
  let num = 0;
  for (let i = 0; i < arr.length; i++)
    if (typeof arr[i] === "number") {
      num += arr[i];
    }
  return num;
}

console.log(taskO([2, true, "salom", 5, { salom: "Steve" }, 70, 52, 1])); */

/** ********************************************** */

/* 
TASK P

Objectni nested array sifatida convert qilib qaytarsin.

Masalan: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]]
*/

/*
function taskP(TASK: any) {
  return Object.entries(TASK);
  // Object.keys()     → keylar  array qilib qaytaradi
  //Object.values()   → valuelar  array qilib qaytaradi
  //Object.entries()  → key + value  array qilib qaytaradi
}

console.log(
  taskP({ name: "Steve", age: 27, nation: "UZB", hooby: "Computer sciense" }),
); */

/** ********************************************** */

/*
TASK Q

Objectda berilgan string propertysi borligini tekshirsin.

Masalan: hasProperty({name: "BMW"}, "name") return true */

/*
function taskQ(obj: object, property: string): boolean {
  return property in obj; // -->  in => method orqali objectni ichidagi propertyni tekshirib beradi. ( return "name" obj) shu formulaga tushadi.
}

console.log(taskQ({ name: "Steve", age: 27 }, "name"));
console.log(taskQ({ name: "Steve", job: "develop" }, "age"));
console.log(taskQ({ name: "Steve", age: 27, job: "develop" }, "job"));   */

/** ********************************************** */

/*
TASK R

"1 + 2" ko'rinishidagi stringni hisoblab number qaytarsin.

Masalan: calculate("1 + 3") return 4. */
/*
function taskR(): Number {
  let a = "1";
  let b = "2";
  return Number(a) + Number(b);
}
console.log(taskR()); */

/** ********************************************** */

/*   TASK S

Array ichidagi tushib qolgan sonni topib qaytarsin.

Masalan: missingNumber([3, 0, 1]) return 2  */
/*
function taskS(arr: number[]) {
  for (let i = 1; i <= 5; i++) {
    // bu yerda 1 dan5 gacha hamma raqamni qoyib keladi
    if (!arr.includes(i)) {
      // bu yerda includes(i) array ichida berilgan raqamlardan loop da kelmagan raqam,ni ushlab qoladi.
      return i;
    }
  }
}

console.log(taskS([1, 2, 3, 5])); // 4. */

/** ********************************************** */

/*   TASK T

Ikkita arrayni qabul qilib, ularni birlashtirib tartiblangan holda qaytarsin.

Masalan: mergeSortedArrays([0, 3, 4], [4, 6]) return [0, 3, 4, 4, 6]  */

/*
function taskT(arr1: number[], arr2: number[]): number[] {
  const result: number[] = []; // bu yerda yangi result nomli varible, bo'sh arr yaratdik 2 la arrayni birlashtirish uchun.
  let m = 0;
  let n = 0;

  while (m < arr1.length && n < arr2.length) {
    if (arr1[m] <= arr2[n]) {
      result.push(arr1[m]); // bu yerda push methodi orqali oxiridan yangi elementlarni qo'hib kelyapmiz
      m++;
    } else {
      result.push(arr2[n]);
      n++;
    }
  }

  while (m < arr1.length) {
    result.push(arr1[m]); // bu yerda yana qaytadan array ichida qolib ketgan ele.ni push qilishni buyurdik.
    m++;
  }
  while (n < arr2.length) {
    result.push(arr2[n]); // bu yerda ham yana qaytadan array ichida qolib ketgan ele.ni push qilishni buyurdik.
    m++;
    n++;
  }

  return result;
}

console.log(taskT([0, 3, 4], [5, 6]));   */

/** ********************************************** */

/*  TASK T => 2- korinishda yechilishi

function taskT(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(taskT([5, 2, 9, 0], [7, 3, 6, 8])); */

/** ********************************************** */

/*.   TASK V

Stringdagi har bir harf necha marta takrorlanganini object sifatida qaytarsin.

Masalan: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}.  */

/*
// bu yerda  ( Record<string, number> ) ===> objectni ichidagi beriladigan kalit va qiymatlarni typi bo'ladi, Typescript uchun yozildi.
function taskV(matn: string): Record<string, number> {
  // Buni mazmuni objectga berilgan kalit ( key )  string bo'lsin qiymatlari( value) number bo'lsin.
  const counts: Record<string, number> = {}; // bu yerda yangi object yaratildi typi yan o'sha holda yozildi. Bu bizga bo'sh sababi biz bergan kkalit sozni hisoblash uchun bo'sh bolishi kerak

  for (const char of matn) {
    // bu yerda yana yangi veribl ochdik => char;  matn ichidagi har bir belgini takrorla va char veriblga saqla deyildi
    counts[char] = (counts[char] ?? 0) + 1; // bu yerda char ni qiymati nullish bo'lsa +1 qo'sh deyildi, ya'ni so'z takrorlanayotganda birinchi harf keldi uni qiymati bor nullish emas u holda +1 ni qo'sh dedik
  } // nullish bo'lsa degani =====> undefined yoki null bo'lsa degani agar huddi shunday bo'lsa ?? ( nullish ) qoidasiga ko'ra ?? dan keyin kelgan qiymatni oladi qoidasi shunday.

  return counts;
}

console.log(taskV("charxesso"));
console.log(taskV("Barakalla"));
*/

/** ********************************************** */

/**   TASK W

Arrayni berilgan uzunlikda bo'laklarga ajratib qaytarsin.

Masalan: chunkArray([1, 2, 3, 4, 5], 2) return [[1, 2], [3, 4], [5]] */

/*
function taskW(array: any, size: number): any {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

console.log(taskW([15, 49, 77, 64, 93, 52], 2));     /*

/** ********************************************** */

/** 
       TASK X

Object tarkibida (nested bo'lsa ham) berilgan kalit necha marta takrorlanganini sanang.

Masalan: countOccurrences({model: "A", s: {model: "B"}}, "model") return 2
 */

/** 
function taskX(obj: any, key: string): number {
  let count = 0;

  for (const k in obj) {
    if (k === key) {
      count++;
    }

    if (typeof obj[k] === "object" && obj[k] !== null) {
      count += taskX(obj[k], key);
    }
  }

  return count;
}

console.log(taskX({ taom: "Palov", task: { taom: "Kabob" } }, "taom"));  */

/** ********************************************** */

/**
TASK Y

Ikkala arrayda ham ishtirok etgan bir xil qiymatlarni qaytarsin.

Masalan: findIntersection([1, 2, 3], [3, 2, 0]) return [2, 3].  */

function taskY(arr1: number[], arr2: number[]): number[] {
  // bu yerda typsc u-n typlari yozildi.
  return arr1.filter((num) => arr2.includes(num));
} // bu yerrda 1 array ichidagi sonlarni filterlaydi 1 arrray ichida kelgan sonni 2 array ichida bor yo'qligini tekshiirib < true , false > qaytaradi
// filter faqat true bo'lgan sonlarni yigib arrayga joylab consolga chiqaradi

console.log(taskY([15, 6, 49, 18], [58, 6, 78, 36, 49, 15]));
