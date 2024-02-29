# Issue-Tracker-Work in Progress


## Hierarchy of Permissions
 <br/>

![Set of Permission](https://cdn.discordapp.com/attachments/1108167978714923110/1211906544489472000/set_of_permissions1.png?ex=65efe6ec&is=65dd71ec&hm=83cb94a21edc9da2b950472c74070b202ce6cacfc616f9722279453e684e9a71&)
<br/>

  - User: Lowest tier 
  - Manager: Ability to open tickets and designate users to ticket
  - Admin: Power user that can perform administrative tasks 

User < Manager < Admin

The permission system is a set of all possible permissions with different tiered accounts being a subset of the overall permission set.

  user = {
  - add comment
  - delete own comment 
  - access assigned tickets
  - commit to tickets
  - sign in 
  - sign out
  - change own information
  }

  
  manager = user ∪ {
   - assign users to ticket
   - open ticket 
   - close tickets
   - remove users from ticket
   - edit certain fields of a ticket
  }

  admin = manager ∪ {
  - delete users 
  - access all tickets
  - delete any comments
  - delete tickets
  - edit more fields of a given ticket
  }

  
