
const filter = (data, input) => {
  let newArray = []
  data.map((car, key) => {
    let objKeys= Object.keys(car);
    for (let i = 0; i < objKeys.length; i++) {
      if (input.includes((objKeys[i]+":").toLowerCase())) {
        let str = input.replace((objKeys[i]+": ").toLowerCase(), "");
        return (""+car[objKeys[i]]).toLowerCase().includes(str) ? key : -1;
      }
    }
    return typeof Object.keys(car).map((key) => car[key]).find((el) => {
      return (""+el).toLowerCase().includes(input)
    }) === 'undefined' ? -1 : key;
  }).forEach((index) => {
    if (index !== -1)
      newArray.push(data[index])
  })
  return newArray
}

export default filter;