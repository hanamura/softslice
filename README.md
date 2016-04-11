# softslice

## Usage

### softSlice(array, index, sliceLength, [leftPrioritized=true])

Returns new array softly sliced from an `array`.

## Example

```javascript
const softSlice = require('softslice');

const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

softSlice(range, 4, 7);
// => [1, 2, 3, 4, 5, 6, 7]

softSlice(range, 2, 7);
// => [0, 1, 2, 3, 4, 5, 6]

softSlice(range, 7, 7);
// => [3, 4, 5, 6, 7, 8, 9]

softSlice(range, 4, 6, true);
// => [1, 2, 3, 4, 5, 6]

softSlice(range, 4, 6, false);
// => [2, 3, 4, 5, 6, 7]
```

## License

MIT
