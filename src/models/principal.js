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

import { DavObject } from './davObject.js';
import * as NS from '../utility/namespaceUtility.js';

/**
 * @class
 */
export class Principal extends DavObject {

	/**
	 * Creates an object that represents a single principal
	 * as specified in RFC 3744
	 *
	 * https://tools.ietf.org/html/rfc3744#section-2
	 *
	 * @inheritDoc
	 */
	constructor(...args) {
		super(...args);

		super._exposeProperty('displayname', NS.DAV, 'displayname');
		super._exposeProperty('calendarUserType', NS.IETF_CALDAV, 'calendar-user-type');
		super._exposeProperty('calendarUserAddressSet', NS.IETF_CALDAV, 'calendar-user-address-set');
		super._exposeProperty('principalUrl', NS.DAV, 'principal-URL');
		super._exposeProperty('email', NS.SABREDAV, 'email-address');

		super._exposeProperty('calendarHomes', NS.IETF_CALDAV, 'calendar-home-set');
		super._exposeProperty('scheduleInbox', NS.IETF_CALDAV, 'schedule-inbox-URL');
		super._exposeProperty('scheduleOutbox', NS.IETF_CALDAV, 'schedule-outbox-URL');

		super._exposeProperty('addressBookHomes', NS.IETF_CARDDAV, 'addressbook-home-set');

		Object.defineProperty(this, 'principalScheme', {
			get: () => {
				const baseUrl = this._request.pathname(this._request.baseUrl);
				let principalURI = this.url.substr(baseUrl.length);
				if (principalURI.substr(-1) === '/') {
					principalURI = principalURI.substr(0, principalURI.length - 1);
				}

				return 'principal:' + principalURI;
			}
		});
	}

	/**
	 * @inheritDoc
	 */
	static getPropFindList(options = {}) {
		const list = [
			[NS.DAV, 'displayname'],
			[NS.IETF_CALDAV, 'calendar-user-type'],
			[NS.IETF_CALDAV, 'calendar-user-address-set'],
			[NS.DAV, 'principal-URL'],
			[NS.SABREDAV, 'email-address']
		];

		if (options.enableCalDAV) {
			list.push(
				[NS.IETF_CALDAV, 'calendar-home-set'],
				[NS.IETF_CALDAV, 'schedule-inbox-URL'],
				[NS.IETF_CALDAV, 'schedule-outbox-URL']
			);
		}
		if (options.enableCardDAV) {
			list.push(
				[NS.IETF_CARDDAV, 'addressbook-home-set']
			);
		}

		return list;
	}

}
