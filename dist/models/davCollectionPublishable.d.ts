export function davCollectionPublishable(Base: any): {
    new (...args: any[]): {
        [x: string]: any;
        /**
         * publishes the DavCollection
         *
         * @returns {Promise<void>}
         */
        publish(): Promise<void>;
        /**
         * unpublishes the DavCollection
         *
         * @returns {Promise<void>}
         */
        unpublish(): Promise<void>;
    };
    [x: string]: any;
    /**
     * @inheritDoc
     */
    getPropFindList(): any;
};
