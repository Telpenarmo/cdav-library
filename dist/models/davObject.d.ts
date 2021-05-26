/**
 * @class
 * @classdesc Generic DavObject aka file
 */
export class DavObject extends DAVEventListener {
    /**
     * A list of all property names that should be included
     * in propfind requests that may include this object
     *
     * @returns {string[][]}
     */
    static getPropFindList(): string[][];
    /**
     * @param {DavCollection} parent - The parent collection this DavObject is a child of
     * @param {Request} request - The request object initialized by DavClient
     * @param {String} url - Full url of this DavObject
     * @param {Object} props - Properties including etag, content-type, etc.
     * @param {boolean} isPartial - Are we dealing with the complete or just partial addressbook / calendar data
     */
    constructor(parent: any, request: Request, url: string, props: any, isPartial?: boolean);
    /**
     * gets unfiltered data for this object
     *
     * @param {boolean} forceReFetch Always refetch data, even if not partial
     * @returns {Promise<void>}
     */
    fetchCompleteData(forceReFetch?: boolean): Promise<void>;
    _props: any;
    _isDirty: boolean;
    _isPartial: boolean;
    /**
     * copies a DavObject to a different DavCollection
     * @param {DavCollection} collection
     * @param {Boolean} overwrite
     * @returns {Promise<DavObject>} Promise that resolves to the copied DavObject
     */
    copy(collection: any, overwrite?: boolean): Promise<DavObject>;
    /**
     * moves a DavObject to a different DavCollection
     * @param {DavCollection} collection
     * @param {Boolean} overwrite
     * @returns {Promise<void>}
     */
    move(collection: any, overwrite?: boolean): Promise<void>;
    _parent: any;
    _url: any;
    /**
     * updates the DavObject on the server
     * @returns {Promise<void>}
     */
    update(): Promise<void>;
    /**
     * deletes the DavObject on the server
     *
     * @returns {Promise<void>}
     */
    delete(): Promise<void>;
    /**
     * returns whether the data in this DavObject is the result of a partial retrieval
     *
     * @returns {boolean}
     */
    isPartial(): boolean;
    /**
     * returns whether the data in this DavObject contains unsynced changes
     *
     * @returns {boolean}
     */
    isDirty(): boolean;
    /**
     * @protected
     * @param {String} localName
     * @param {String} xmlNamespace
     * @param {String} xmlName
     * @param {boolean} mutable
     * @returns void
     */
    protected _exposeProperty(localName: string, xmlNamespace: string, xmlName: string, mutable?: boolean): void;
}
import DAVEventListener from "./davEventListener.js";
