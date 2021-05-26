/**
 * @class
 */
export class Principal extends DavObject {
    /**
     * @inheritDoc
     */
    static getPropFindList(options?: {}): string[][];
    /**
     * Creates an object that represents a single principal
     * as specified in RFC 3744
     *
     * https://tools.ietf.org/html/rfc3744#section-2
     *
     * @inheritDoc
     */
    constructor(...args: any[]);
}
import { DavObject } from "./davObject.js";
