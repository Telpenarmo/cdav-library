/**
 * This class represents a calendar home as specified in
 * https://tools.ietf.org/html/rfc4791#section-6.2.1
 *
 * As of this versions' release, the Nextcloud server will always
 * return only one calendar home. Despite that, RFC4791 allows
 * a server to return multiple calendar homes though.
 */
export class CalendarHome extends DavCollection {
    /**
     * @inheritDoc
     */
    constructor(...args: any[]);
    /**
     * finds all CalDAV-specific collections in this calendar home
     *
     * @returns {Promise<Calendar[]|Subscription[]|ScheduleInbox[]|ScheduleOutbox[]>}
     */
    findAllCalDAVCollections(): Promise<Calendar[] | Subscription[] | ScheduleInbox[] | ScheduleOutbox[]>;
    /**
     * finds all calendars in this calendar home
     *
     * @returns {Promise<Calendar[]>}
     */
    findAllCalendars(): Promise<Calendar[]>;
    /**
     * finds all subscriptions in this calendar home
     *
     * @returns {Promise<Subscription[]>}
     */
    findAllSubscriptions(): Promise<Subscription[]>;
    /**
     * finds all schedule inboxes in this calendar home
     *
     * @returns {Promise<ScheduleInbox[]>}
     */
    findAllScheduleInboxes(): Promise<ScheduleInbox[]>;
    /**
     * finds all schedule outboxes in this calendar home
     *
     * @returns {Promise<ScheduleOutbox[]>}
     */
    findAllScheduleOutboxes(): Promise<ScheduleOutbox[]>;
    /**
     * creates a new calendar collection
     *
     * @param {String} displayname
     * @param {String} color
     * @param {String[]} supportedComponentSet
     * @param {Number} order
     * @param {String=} timezone
     * @returns {Promise<Calendar>}
     */
    createCalendarCollection(displayname: string, color: string, supportedComponentSet?: string[], order?: number, timezone?: string | undefined): Promise<Calendar>;
    /**
     * creates a new subscription
     *
     * @param {String} displayname
     * @param {String} color
     * @param {String} source
     * @param {Number} order
     * @returns {Promise<Subscription>}
     */
    createSubscribedCollection(displayname: string, color: string, source: string, order?: number): Promise<Subscription>;
    /**
     * Search all calendars the user has access to
     * This method makes use of Nextcloud's custom
     * calendar Search API
     *
     * Documentation about that API can be found at: ...
     *
     * @returns {Promise<VObject[]>}
     */
    search(): Promise<any[]>;
    /**
     * enables the birthday calendar for the Calendar Home that belongs to this user
     *
     * @returns {Promise<void>}
     */
    enableBirthdayCalendar(): Promise<void>;
}
import { DavCollection } from "./davCollection.js";
import { Calendar } from "./calendar.js";
import { Subscription } from "./subscription.js";
import ScheduleInbox from "./scheduleInbox.js";
import ScheduleOutbox from "./scheduleOutbox.js";
