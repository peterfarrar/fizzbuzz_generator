function* fizzbuzz (fizz: number, bang: number, max: number): IterableIterator<string | void> {
  if (max < 1) throw new Error('FizzBuzz: max value must be at least 1')
  
  for (let i: number = 1; i <= max; i++) {
    const result: string = (i%fizz ? '' : 'fizz') + (i%bang ? '' : 'bang')
    yield (result ? result : i.toString())
  }
}

const fizzval: number = 3
const buzzval: number = 5
const maxval: number  = 100
const fizzer = fizzbuzz(fizzval, buzzval, maxval)

let val: string | void = "0"
do { 
  console.log(val)
} while (val = fizzer.next().value)