export function davCollectionShareable(Base: any): {
    new (...args: any[]): {
        [x: string]: any;
        /**
         * shares a DavCollection
         *
         * @param {String} principalScheme
         * @param {boolean} writeable
         * @param {string} summary
         * @returns {Promise<void>}
         */
        share(principalScheme: string, writeable?: boolean, summary?: string): Promise<void>;
        /**
         * unshares a DAVCollection
         *
         * @param {string} principalScheme
         * @returns {Promise<void>}
         */
        unshare(principalScheme: string): Promise<void>;
        /**
         * checks whether a collection is shareable
         *
         * @returns {Boolean}
         */
        isShareable(): boolean;
        /**
         * checks whether a collection is publishable
         *
         * @returns {Boolean}
         */
        isPublishable(): boolean;
    };
    [x: string]: any;
    /**
     * @inheritDoc
     */
    getPropFindList(): any;
};
