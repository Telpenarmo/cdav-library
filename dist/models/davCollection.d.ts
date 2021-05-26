export class DavCollection extends DAVEventListener {
    /**
     * A list of all property names that should be included
     * in propfind requests that may include this collection
     *
     * @returns {string[][]}
     */
    static getPropFindList(): string[][];
    /**
     * @param {Object} parent
     * @param {Request} request
     * @param {String} url
     * @param {Object} props
     */
    constructor(parent: any, request: Request, url: string, props: any);
    /**
     * finds all children of a collection
     *
     * @returns {Promise<DavObject[]|DavCollection[]>}
     */
    findAll(): Promise<DavObject[] | DavCollection[]>;
    /**
     * finds all children of a collection filtered by filter
     *
     * @param {Function} filter
     * @returns {Promise<DavObject[]|DavCollection[]>}
     */
    findAllByFilter(filter: Function): Promise<DavObject[] | DavCollection[]>;
    /**
     * find one object by its uri
     *
     * @param {String} uri
     * @returns {Promise<DavObject|DavCollection>}
     */
    find(uri: string): Promise<DavObject | DavCollection>;
    /**
     * creates a new webdav collection
     * https://tools.ietf.org/html/rfc5689
     *
     * You usually don't want to call this method directly
     * but instead use:
     * - AddressBookHome->createAddressBookCollection
     * - CalendarHome->createCalendarCollection
     * - CalendarHome->createSubscribedCollection
     *
     * @param {string} name
     * @param {?Array} props
     * @returns {Promise<DavCollection>}
     */
    createCollection(name: string, props?: any[] | null): Promise<DavCollection>;
    /**
     * creates a new webdav object inside this collection
     *
     * You usually don't want to call this method directly
     * but instead use:
     * - AddressBook->createVCard
     * - Calendar->createVObject
     *
     * @param {String} name
     * @param {Object} headers
     * @param {String} data
     * @returns {Promise<DavObject>}
     */
    createObject(name: string, headers: any, data: string): Promise<DavObject>;
    /**
     * sends a PropPatch request to update the collections' properties
     * The request is only made if properties actually changed
     *
     * @returns {Promise<void>}
     */
    update(): Promise<void>;
    /**
     * deletes the DavCollection on the server
     *
     * @returns {Promise<void>}
     */
    delete(): Promise<void>;
    /**
     *
     * @returns {boolean}
     */
    isReadable(): boolean;
    /**
     *
     * @returns {boolean}
     */
    isWriteable(): boolean;
    /**
     * checks whether this is of the same type as another collection
     * @param {DavCollection} collection
     */
    isSameCollectionTypeAs(collection: DavCollection): boolean;
    /**
     * @protected
     * @param {String} identifier
     * @param {Function} factory
     * @returns void
     */
    protected _registerCollectionFactory(identifier: string, factory: Function): void;
    /**
     * @protected
     * @param {String} identifier
     * @param {Function} factory
     * @returns void
     */
    protected _registerObjectFactory(identifier: string, factory: Function): void;
    /**
     * @protected
     * @param factory
     * @returns void
     */
    protected _registerPropSetFactory(factory: any): void;
    /**
     * @protected
     * @param {String} localName
     * @param {String} xmlNamespace
     * @param {String} xmlName
     * @param {boolean} mutable
     * @returns void
     */
    protected _exposeProperty(localName: string, xmlNamespace: string, xmlName: string, mutable?: boolean): void;
    /**
     * @protected
     * @param {String} token
     * @returns {String}
     */
    protected _getAvailableNameFromToken(token: string): string;
    /**
     * get updated properties for this collection from server
     * @protected
     * @returns {Object}
     */
    protected _updatePropsFromServer(): any;
    _props: any;
    /**
     * @param {Object} response
     * @param {Boolean} isPartial
     * @returns {DavObject[]|DavCollection[]}
     * @protected
     */
    protected _handleMultiStatusResponse(response: any, isPartial?: boolean): DavObject[] | DavCollection[];
}
import DAVEventListener from "./davEventListener.js";
import { DavObject } from "./davObject.js";
