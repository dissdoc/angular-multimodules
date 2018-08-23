import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryEventsService implements InMemoryDbService {
  createDb() {
    const events = [
      {id: 1, name: 'Alert'},
      {id: 2, name: 'Alert'},
      {id: 3, name: 'Warning'},
      {id: 4, name: 'Alert'},
      {id: 5, name: 'Alert'},
      {id: 6, name: 'Error'},
      {id: 7, name: 'Alert'},
      {id: 8, name: 'Error'},
      {id: 9, name: 'Warning'},
    ];

    return {events};
  }
}
