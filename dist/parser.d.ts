/**
 * CDAV Library
 *
 * This library is part of the Nextcloud project
 *
 * @author Georg Ehrke
 * @copyright 2018 Georg Ehrke <oc.list@georgehrke.com>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
/**
 *
 */
export default class Parser {
    /**
     * returns text value of Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {String}
     */
    static text(document: Document, node: Node, resolver: XPathNSResolver): string;
    /**
     * returns boolean value of Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {Boolean}
     */
    static bool(document: Document, node: Node, resolver: XPathNSResolver): boolean;
    /**
     * returns decimal integer value of Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {Number}
     */
    static decInt(document: Document, node: Node, resolver: XPathNSResolver): number;
    /**
     * returns Date value of Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {Date}
     */
    static rfc1123Date(document: Document, node: Node, resolver: XPathNSResolver): Date;
    /**
     * returns Date value of Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {Date}
     */
    static iCalendarTimestamp(document: Document, node: Node, resolver: XPathNSResolver): Date;
    /**
     * parses a {DAV:}resourcetype Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {String[]}
     */
    static resourceType(document: Document, node: Node, resolver: XPathNSResolver): string[];
    /**
     * parses a node with one href nodes as child
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {String}
     */
    static href(document: Document, node: Node, resolver: XPathNSResolver): string;
    /**
     * parses a node with multiple href nodes as children
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {String[]}
     */
    static hrefs(document: Document, node: Node, resolver: XPathNSResolver): string[];
    /**
     * Parses a set of {DAV:}privilege Nodes
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {String[]}
     */
    static privileges(document: Document, node: Node, resolver: XPathNSResolver): string[];
    /**
     * parses the {DAV:}current-user-principal Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {Object}
     * @property {String} type
     * @property {String} href
     */
    static currentUserPrincipal(document: Document, node: Node, resolver: XPathNSResolver, ...args: any[]): any;
    /**
     * Parses a {urn:ietf:params:xml:ns:carddav}supported-address-data Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {*}
     */
    static addressDataTypes(document: Document, node: Node, resolver: XPathNSResolver): any;
    /**
     * Parses a {urn:ietf:params:xml:ns:carddav}supported-collation-set Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {*}
     */
    static supportedCardDAVCollations(document: Document, node: Node, resolver: XPathNSResolver): any;
    /**
     * Parses a {urn:ietf:params:xml:ns:caldav}supported-collation-set Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {*}
     */
    static supportedCalDAVCollations(document: Document, node: Node, resolver: XPathNSResolver): any;
    /**
     * Parses a {urn:ietf:params:xml:ns:caldav}supported-calendar-component-set Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {String[]}
     */
    static calendarComps(document: Document, node: Node, resolver: XPathNSResolver): string[];
    /**
     * Parses a {urn:ietf:params:xml:ns:caldav}supported-calendar-data Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {*}
     */
    static calendarDatas(document: Document, node: Node, resolver: XPathNSResolver): any;
    /**
     * Parses a {urn:ietf:params:xml:ns:caldav}schedule-calendar-transp Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {String}
     */
    static scheduleCalendarTransp(document: Document, node: Node, resolver: XPathNSResolver): string;
    /**
     * Parses a {http://apple.com/ns/ical/}calendar-color Node
     * strips the alpha value of RGB values
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {String}
     */
    static color(document: Document, node: Node, resolver: XPathNSResolver): string;
    /**
     * Parses a {http://calendarserver.org/ns/}allowed-sharing-modes Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {String[]}
     */
    static allowedSharingModes(document: Document, node: Node, resolver: XPathNSResolver): string[];
    /**
     * Parses a {http://owncloud.org/ns}invite Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {*}
     */
    static ocInvite(document: Document, node: Node, resolver: XPathNSResolver): any;
    /**
     * Parses a set of {http://owncloud.org/ns}access Nodes
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @returns {String[]}
     */
    static ocAccess(document: Document, node: Node, resolver: XPathNSResolver): string[];
    /**
     * Key Value Map of propertyName => parser
     * @type {Object}
     * @private
     */
    private _parser;
    /**
     * checks if a parser exists for a given property name
     *
     * @param {String} propertyName
     * @returns {boolean}
     */
    canParse(propertyName: string): boolean;
    /**
     * parses a single prop Node
     *
     * @param {Document} document
     * @param {Node} node
     * @param {XPathNSResolver} resolver
     * @return {*}
     */
    parse(document: Document, node: Node, resolver: XPathNSResolver): any;
    /**
     * registers a parser for propertyName
     *
     * @param {String} propertyName
     * @param {Function} parser
     */
    registerParser(propertyName: string, parser: Function): void;
    /**
     * unregisters a parser for propertyName
     *
     * @param {String} propertyName
     */
    unregisterParser(propertyName: string): void;
    /**
     * registers the predefined parsers
     *
     * @private
     */
    private _registerDefaultParsers;
}
