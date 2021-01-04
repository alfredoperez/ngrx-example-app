import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Friend } from '../models/friends.model';

/**
 * Service to do API call to the `friends` resource.
 * NOTE: This is a mock, since there is not an API endpoint for friend
 */
@Injectable({providedIn: 'root'})
export class FriendsApiService {

  constructor() {
  }

  /**
   * Get list of friends for current user
   * NOTE: This is a mocked operation and returns 150 fake friends
   *       The friends are different every time
   */
  list(): Observable<Array<Friend>> {
    // NOTE: Uncomment the following code to simulate an error
    // return throwError(new Error('Fake error'));

    const friends = [] as Array<Friend>;

    for (let i = 0; i < 150; i++) {
      const friend = {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        weight: Math.floor(Math.random() * (220 - 120)) + 120,
        age: Math.floor(Math.random() * (65 - 23)) + 23,
        created: faker.date.between(
          new Date(2020, 4, 1),
          new Date(2020, 6, 10)
        ),
        friends: []
      } as Friend;
      friends.push(friend);
    }

    friends.forEach(friend => {
      const maxNumberOfFriends = Math.floor(Math.random() * (3 - 1)) + 1;

      for (let i = 0; i < maxNumberOfFriends; i++) {
        const friendIndex = Math.floor(Math.random() * (149 - 1)) + 1;
        friend.friends.push(friends[friendIndex]);
      }
    });

    return of(friends).pipe(delay(200));
  }

  /**
   * Adds a friend to the collection
   * @param friend - Friend to be added
   */
  add(friend: Friend): Observable<Friend> {
    // NOTE: Uncomment the following code to simulate an error
    // return throwError(new Error('Fake error'));
    const newFriend = {
      ...friend,
      created: new Date(Date.now()),
      id: faker.random.uuid()
    };

    return of(newFriend);

  }
}
