# softslice

Slice array with base index and length around it.

## Usage

### softSlice(array, index, sliceLength, [leftPrioritized=true])

Returns new array softly sliced from an `array`.

## Example

```javascript
const softSlice = require('softslice');

const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

softSlice(range, 4, 7);
// => [1, 2, 3, 4, 5, 6, 7]
//
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     < ------ i ------ >

softSlice(range, 2, 7);
// => [0, 1, 2, 3, 4, 5, 6]
//
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//  < --- i --------- >

softSlice(range, 7, 7);
// => [3, 4, 5, 6, 7, 8, 9]
//
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//           < --------- i --- >

softSlice(range, 4, 6, true);
// => [1, 2, 3, 4, 5, 6]
//
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     < ------ i --- >

softSlice(range, 4, 6, false);
// => [2, 3, 4, 5, 6, 7]
//
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//        < --- i ------ >
```

## License

MIT
