export default class ScheduleOutbox extends DavCollection {
    /**
     * Sends a free-busy-request for the scheduling outbox
     * The data is required to be a valid iTIP data.
     * For an example, see https://tools.ietf.org/html/rfc6638#appendix-B.5
     *
     * @param {String} data iTIP with VFREEBUSY component and METHOD:REQUEST
     * @returns {Promise<String[]>}
     */
    freeBusyRequest(data: string): Promise<string[]>;
}
import { DavCollection } from "./davCollection.js";
