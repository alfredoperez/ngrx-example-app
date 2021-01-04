import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from '../../models/friends.model';

/**
 * Pipe that converts an array of friends to a comma
 * separated string containing only names.
 */
@Pipe({name: 'friendsNames'})
export class FriendsNamesPipe implements PipeTransform {

  /**
   * Converts an array of friends to a comma
   * separated string containing only names.
   * @param friends - List of friends
   */
  transform(friends: Array<Friend>): string {
    if (friends === null || !Array.isArray(friends)) {
      return '';
    }
    return friends.map(friend => friend.name)
      .join(', ');
  }
}
