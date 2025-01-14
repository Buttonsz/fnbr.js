import BasePartyJoinRequest from './BasePartyJoinRequest';
import ClientUser from '../user/ClientUser';
import Friend from '../friend/Friend';

/**
 * Represents an outgoing party join request
 */
class SentPartyJoinRequest extends BasePartyJoinRequest {
  public receiver!: Friend;
  public sender!: ClientUser;
}

export default SentPartyJoinRequest;
