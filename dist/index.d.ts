/**
 *
 */
export default class DavClient {
    /**
     * @param {Object} options
     * @param {String} options.rootUrl
     * @param {Function} xhrProvider
     * @param {Object} factories
     */
    constructor(options: {
        rootUrl: string;
    }, xhrProvider?: Function, factories?: any);
    /**
     * root URL of DAV Server
     *
     * @type {String}
     */
    rootUrl: string;
    /**
     * List of advertised DAV features
     *
     * @type {String[]}
     */
    advertisedFeatures: string[];
    /**
     * Principal object of current user
     *
     * @type {Principal}
     */
    currentUserPrincipal: Principal;
    /**
     * Array of links to principal collections
     *
     * @type {String[]}
     */
    principalCollections: string[];
    /**
     * Array of calendar homes
     * will be filled after connect() was called
     *
     * @type {CalendarHome[]}
     */
    calendarHomes: CalendarHome[];
    /**
     * The calendar-home that houses all public calendars
     * findAll will obviously not work ;)
     * use find(token) to get a public calendar
     *
     * @type {CalendarHome|null}
     */
    publicCalendarHome: CalendarHome | null;
    /**
     * Array of address book homes
     * will be filled after connect() was called
     *
     * @type {AddressBookHome[]}
     */
    addressBookHomes: AddressBookHome[];
    /**
     *
     * @type {Parser}
     */
    parser: Parser;
    /**
     *
     * @type {boolean}
     * @private
     */
    private _isConnected;
    /**
     *
     * @type {Request}
     * @private
     */
    private _request;
    /**
     * initializes the DAVClient
     * @param {Object} options
     * @returns {Promise<DavClient>}
     */
    connect(options?: any): Promise<DavClient>;
    /**
     * performs a principal property search based on a principal's displayname
     *
     * @param {String} name
     * @returns {Promise<Principal[]>}
     */
    principalPropertySearchByDisplayname(name: string): Promise<Principal[]>;
    /**
     * performs a principal property search based on a principal's displayname OR email address
     *
     * @param {String} value
     * @returns {Promise<Principal[]>}
     */
    principalPropertySearchByDisplaynameOrEmail(value: string): Promise<Principal[]>;
    /**
     * Performs a principal property based on the address of a room
     *
     * @param {String} address Address of the building the room is in
     * @returns {Promise<Principal[]>}
     */
    principalPropertySearchByAddress(address: string): Promise<Principal[]>;
    /**
     * Performs a principal property search based on the address and story of a room
     *
     * @param {String} address Address of the building the room is in
     * @param {String} story Story inside the building the room is in
     * @returns {Promise<[]>}
     */
    principalPropertySearchByAddressAndStory(address: string, story: string): Promise<[]>;
    /**
     * performs a principal property search
     * @see https://tools.ietf.org/html/rfc3744#section-9.4
     *
     * @param {Array} props
     * @param {String} match
     * @param {String} test 'anyof', 'allof' or none
     * @returns {Promise<Principal[]>}
     */
    principalPropertySearch(props: any[], match: string, test: string): Promise<Principal[]>;
    /**
     * finds one principal at a given principalUrl
     *
     * @param {String} principalUrl
     * @returns {Promise<Principal>}
     */
    findPrincipal(principalUrl: string): Promise<Principal>;
    /**
     * discovers the accounts principal uri solely based on rootURL
     *
     * @returns {Promise<string>}
     * @private
     */
    private _discoverPrincipalUri;
    /**
     * discovers all calendar-homes in this account, all principal collections
     * and advertised features
     *
     * a user will most commonly only have one calendar-home,
     * the CalDAV standard allows multiple calendar-homes though
     *
     * @param {Object} props
     * @returns void
     * @private
     */
    private _extractCalendarHomes;
    /**
     * discovers all address-book-homes in this account, all principal collections
     * and advertised features
     *
     * a user will most commonly only have one address-book-home,
     * the CardDAV standard allows multiple address-book-homes though
     *
     * @param {Object} props
     * @returns void
     * @private
     */
    private _extractAddressBookHomes;
    /**
     * extracts principalCollection Information from an existing props object
     * returned from the server
     *
     * @param {Object} props
     * @returns void
     * @private
     */
    private _extractPrincipalCollectionSets;
    /**
     * extracts the advertised features supported by the DAV server
     *
     * @param {XMLHttpRequest} xhr
     * @returns void
     * @private
     */
    private _extractAdvertisedDavFeatures;
    /**
     * Creates a public calendar home
     *
     * @returns void
     * @private
     */
    private _createPublicCalendarHome;
}
import { debugFactory } from "./debug.js";
import * as NS from "./utility/namespaceUtility.js";
import { Principal } from "./models/principal.js";
import { CalendarHome } from "./models/calendarHome.js";
import { AddressBookHome } from "./models/addressBookHome.js";
import Parser from "./parser.js";
export { debugFactory as debug, NS as namespaces };
