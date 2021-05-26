/**
 * This class represents an address book home as specified in
 * https://tools.ietf.org/html/rfc6352#section-7.1.1
 *
 * As of this versions' release, the Nextcloud server will always
 * return only one address book home. Despite that, RFC6352 allows
 * a server to return multiple address book homes though.
 */
export class AddressBookHome extends DavCollection {
    /**
     * @inheritDoc
     */
    constructor(...args: any[]);
    /**
     * finds all address books in this address book home
     *
     * @returns {Promise<AddressBook[]>}
     */
    findAllAddressBooks(): Promise<AddressBook[]>;
    /**
     * creates a new address book collection
     *
     * @param {String} displayname
     * @returns {Promise<AddressBook>}
     */
    createAddressBookCollection(displayname: string): Promise<AddressBook>;
}
import { DavCollection } from "./davCollection.js";
import { AddressBook } from "./addressBook.js";
