/**
 * Request class is used to send any kind of request to the DAV server
 * It also parses incoming XML responses
 */
export default class Request {
    /**
     * Creates a new Request object
     *
     * @param {String} baseUrl - root url of DAV server, use OC.remote('dav')
     * @param {Parser} parser - instance of Parser class
     * @param {Function} xhrProvider - Function that returns new XMLHttpRequest objects
     */
    constructor(baseUrl: string, parser: any, xhrProvider?: Function);
    baseUrl: string;
    parser: any;
    xhrProvider: Function;
    /**
     * sends a GET request
     *
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    get(url: string, headers?: any, body?: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a PATCH request
     *
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    patch(url: string, headers: any, body: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a POST request
     *
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    post(url: string, headers: any, body: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a PUT request
     *
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    put(url: string, headers: any, body: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a DELETE request
     *
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    delete(url: string, headers?: any, body?: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a COPY request
     * https://tools.ietf.org/html/rfc4918#section-9.8
     *
     * @param {String} url - URL to do the request on
     * @param {String} destination - place to copy the object/collection to
     * @param {Number|String} depth - 0 = copy collection without content, Infinity = copy collection with content
     * @param {Boolean} overwrite - whether or not to overwrite destination if existing
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    copy(url: string, destination: string, depth?: number | string, overwrite?: boolean, headers?: any, body?: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a MOVE request
     * https://tools.ietf.org/html/rfc4918#section-9.9
     *
     * @param {String} url - URL to do the request on
     * @param {String} destination - place to move the object/collection to
     * @param {Boolean} overwrite - whether or not to overwrite destination if existing
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    move(url: string, destination: string, overwrite?: boolean, headers?: any, body?: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a LOCK request
     * https://tools.ietf.org/html/rfc4918#section-9.10
     *
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    lock(url: string, headers?: any, body?: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends an UNLOCK request
     * https://tools.ietf.org/html/rfc4918#section-9.11
     *
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    unlock(url: string, headers?: any, body?: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a PROPFIND request
     * https://tools.ietf.org/html/rfc4918#section-9.1
     *
     * @param {String} url - URL to do the request on
     * @param {String[][]} properties - list of properties to search for, formatted as [namespace, localName]
     * @param {Number|String} depth - Depth header to send
     * @param {Object} headers - additional HTTP headers to send
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    propFind(url: string, properties: string[][], depth?: number | string, headers?: any, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a PROPPATCH request
     * https://tools.ietf.org/html/rfc4918#section-9.2
     *
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    propPatch(url: string, headers: any, body: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a MKCOL request
     * https://tools.ietf.org/html/rfc4918#section-9.3
     * https://tools.ietf.org/html/rfc5689
     *
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    mkCol(url: string, headers: any, body: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends a REPORT request
     * https://tools.ietf.org/html/rfc3253#section-3.6
     *
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    report(url: string, headers: any, body: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * sends generic request
     *
     * @param {String} method - HTTP Method name
     * @param {String} url - URL to do the request on
     * @param {Object} headers - additional HTTP headers to send
     * @param {String} body - request body
     * @param {Function} beforeRequestHandler - custom function to be called before the request is made
     * @param {Function} afterRequestHandler - custom function to be called after the request was made
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    request(method: string, url: string, headers: any, body: string, beforeRequestHandler?: Function, afterRequestHandler?: Function): Promise<{
        Object;
    }>;
    /**
     * returns name of file / folder of a url
     *
     * @params {String} url
     * @returns {String}
     */
    filename(url: any): string;
    /**
     * returns pathname for a URL
     *
     * @params {String} url
     * @returns {String}
     */
    pathname(url: any): string;
    /**
     * returns absolute url
     *
     * @param {String} url
     * @returns {String}
     */
    absoluteUrl(url: string): string;
    /**
     * parses a multi status response (207), sorts them by path
     * and drops all unsuccessful responses
     *
     * @param {String} body
     * @returns {Object}
     * @private
     */
    private _parseMultiStatusResponse;
}
