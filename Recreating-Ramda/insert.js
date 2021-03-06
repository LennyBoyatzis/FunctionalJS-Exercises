import _curry3 from './internal/_curry3';
import _slice from './internal/_slice';

/**
 * Inserts the supplied element into the list, at index `index`. _Note that
 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */

const insert = _curry3(idx, elt, list) => {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    let result = _slice(list);
    result.splice(idx, 0, elt);
    return result;
}

module.exports = insert;
