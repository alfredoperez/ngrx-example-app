/**
 * This is the model returned by the Friend API
 */
export interface Friend {
  /**
   * Id of the friend
   */
  id: string;

  /**
   * Date the entity was created
   */
  created: Date;

  /**
   * Full name
   */
  name: string;

  /**
   * Age in years
   */
  age: number;

  /**
   *  Number of kids
   */
  kids: number;

  /**
   * List of friends
   */
  friends: Friend[];
}
