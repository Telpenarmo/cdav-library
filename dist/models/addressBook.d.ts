/**
 * This class represents an address book collection as specified in
 * https://tools.ietf.org/html/rfc6352#section-5.2
 *
 * On top of all the properties provided by davCollectionShareable and DavCollection,
 * It allows you access to the following list of properties:
 * - description
 * - enabled
 * - readOnly
 *
 * The first two allowing read-write access
 *
 * @augments DavCollection
 */
export class AddressBook extends DavCollection {
    /**
     * checks if the prop part of a report requested partial data
     *
     * @param {Object[]} prop
     * @returns {boolean}
     * @private
     */
    private static _isRetrievalPartial;
    /**
     * @inheritDoc
     */
    constructor(...args: any[]);
    /**
     * finds all VCards in this address book
     *
     * @returns {Promise<VCard[]>}
     */
    findAllVCards(): Promise<VCard[]>;
    /**
     * finds all contacts in an address-book, but with filtered data.
     *
     * Example use:
     * findAllAndFilterBySimpleProperties(['EMAIL', 'UID', 'CATEGORIES', 'FN', 'TEL', 'NICKNAME', 'N'])
     *
     * @param {String[]} props
     * @returns {Promise<VCard[]>}
     */
    findAllAndFilterBySimpleProperties(props: string[]): Promise<VCard[]>;
    /**
     * creates a new VCard object in this address book
     *
     * @param {String} data
     * @returns {Promise<VCard>}
     */
    createVCard(data: string): Promise<VCard>;
    /**
     * sends an addressbook query as defined in
     * https://tools.ietf.org/html/rfc6352#section-8.6
     *
     * @param {Object[]} filter
     * @param {Object[]} prop
     * @param {Number} limit
     * @param {String} test Either anyof or allof
     * @returns {Promise<VCard[]>}
     */
    addressbookQuery(filter: any[], prop?: any[], limit?: number, test?: string): Promise<VCard[]>;
    /**
     * sends an addressbook multiget query as defined in
     * https://tools.ietf.org/html/rfc6352#section-8.7
     *
     * @param {String[]} hrefs
     * @param {Object[]} prop
     * @returns {Promise<VCard[]>}
     */
    addressbookMultiget(hrefs: string[], prop: any[]): Promise<VCard[]>;
    /**
     * sends an addressbook multiget query as defined in
     * https://tools.ietf.org/html/rfc6352#section-8.7
     * and requests a download of the result
     *
     * @param {String[]} hrefs
     * @param {Object[]} prop
     * @returns {Promise<{Object}>}
     * @property {String|Object} body
     * @property {Number} status
     * @property {XMLHttpRequest} xhr
     */
    addressbookMultigetExport(hrefs: string[], prop: any[]): Promise<{
        Object;
    }>;
    /**
     *
     * @param {String[]} hrefs
     * @param {Object[]} prop
     * @returns String
     * @private
     */
    private _buildMultiGetBody;
}
import { DavCollection } from "./davCollection.js";
import { VCard } from "./vcard.js";
