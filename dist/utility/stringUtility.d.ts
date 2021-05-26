/**
 * generates a unique id with the option to pass a prefix and a filetype
 *
 * @param {string} prefix
 * @param {string} suffix
 * @returns {string}
 */
export function uid(prefix: string, suffix: string): string;
/**
 * generates a uri and checks with isAvailable, whether or not the uri is still available
 *
 * @param {string} start
 * @param {Function} isAvailable
 * @returns {string}
 */
export function uri(start: string, isAvailable: Function): string;
