import { InMemoryDbService } from 'angular-in-memory-web-api';

import { events } from './events.mock';
import { users } from './users.mock';

export class InMemoryEventsService implements InMemoryDbService {
  createDb() {
    return {
      events,
      users
    };
  }
}
