import _curry1 from `./internal/_curry1`;
import _indexOf from `./internal/_indexOf`;

/**
* Returns `true` if all elements are unique
*
* @param {Array} list The array to consider
* @return {Boolean} `true` if all elements are unique, else, `false`
* @example
*   R.allUniq(['1', 1]); //=> true
*   R.allUniq([1, 1]);   //=> false
*   R.allUniq([[42], [42]]); //=> false
*/

const allUniq =  _curry1((list) => {
    const len = list.length;
    const idx = 0;
    while (idx < len) {
        if (_indexOf(list, list[idx], idx + 1) >= 0) {
            return false;
        }
        idx += 1;
    }
    return true;
})
