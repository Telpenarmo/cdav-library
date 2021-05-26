/**
 * This class represents an calendar collection as specified in
 * https://tools.ietf.org/html/rfc4791#section-4.2
 *
 * On top of all the properties provided by davCollectionShareable,
 * davCollectionPublishable and DavCollection,
 * It allows you access to the following list of properties:
 * - color
 * - enabled
 * - order
 * - timezone
 * - components
 *
 * The first four allowing read-write access
 *
 * @augments DavCollection
 */
export class Calendar extends DavCollection {
    /**
     * checks if the prop part of a report requested partial data
     *
     * @param {Object[]} prop
     * @returns {boolean}
     * @private
     */
    private static _isRetrievalPartial;
    /**
     * creates an iCalendar formatted DATE-TIME string from a date object
     *
     * @param {Date} date
     * @return {String}
     * @private
     */
    private static _getICalendarDateTimeFromDateObject;
    /**
     * @inheritDoc
     */
    constructor(...args: any[]);
    /**
     * finds all VObjects in this calendar
     *
     * @returns {Promise<VObject[]>}
     */
    findAllVObjects(): Promise<VObject[]>;
    /**
     * find all VObjects filtered by type
     *
     * @param {String} type
     * @returns {Promise<VObject[]>}
     */
    findByType(type: string): Promise<VObject[]>;
    /**
     * find all VObjects in a time-range filtered by type
     *
     * @param {number} type
     * @param {Date} from
     * @param {Date} to
     * @returns {Promise<VObject[]>}
     */
    findByTypeInTimeRange(type: number, from: Date, to: Date): Promise<VObject[]>;
    /**
     * create a VObject inside this calendar
     *
     * @returns {Promise<VObject>}
     */
    createVObject(data: any): Promise<VObject>;
    /**
     * sends a calendar query as defined in
     * https://tools.ietf.org/html/rfc4791#section-7.8
     *
     * @param {Object[]} filter
     * @param {Object[]} prop
     * @param {String} timezone
     * @returns {Promise<VObject[]>}
     */
    calendarQuery(filter: any[], prop?: any[], timezone?: string): Promise<VObject[]>;
    /**
     * sends a calendar multiget query as defined in
     * https://tools.ietf.org/html/rfc4791#section-7.9
     *
     * @param {String[]} hrefs
     * @param {Object[]} prop
     * @returns {Promise<VObject[]>}
     */
    calendarMultiget(hrefs: string[], prop: any[]): Promise<VObject[]>;
    /**
     * sends a calendar free-busy-query as defined in
     * https://tools.ietf.org/html/rfc4791#section-7.10
     *
     * @param {Date} from
     * @param {Date} to
     * @returns {Promise<String>}
     */
    freeBusyQuery(from: Date, to: Date): Promise<string>;
}
import { DavCollection } from "./davCollection.js";
import { VObject } from "./vobject.js";
