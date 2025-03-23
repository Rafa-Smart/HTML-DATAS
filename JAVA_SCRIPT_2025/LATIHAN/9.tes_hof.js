function gede(a) {
  return a.map((element) => {
    // return element[0].toUpperCase() + element.slice(1).toLowerCase();
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });
}
console.log(gede(["dasdsa", "sadsad"]));
