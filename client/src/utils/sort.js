const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }

export const YO = arr => arr.sort(compareKey('age'))
export const OY = arr => arr.sort(compareKey('age')).reverse()

//need to add shelter in schema
export const shelterYoungest= arr => arr.sort((a, b) => parseInt(a.price) - parseInt(b.price))
export const shelterLongest = arr => arr.sort((a, b) => parseInt(b.price) - parseInt(a.price))