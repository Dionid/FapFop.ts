import { Nominal, NominalFactory, NominalDiscriminatedUnionHandlers } from './nominal'

describe('adt', () => {
  it('should ', () => {
    type User = {
      id: string
      username: string
    }
    type UserN = Nominal<'User', User>
    const UserN = NominalFactory<UserN>('User')

    type Admin = {
      id: string
      adminPass: string
      otherAdminStuff: string
    }
    type AdminN = Nominal<'Admin', Admin>
    const AdminN = NominalFactory<AdminN>('Admin')

    type Player = AdminN | UserN

    const Player = {
      switchMatch: (player: Player, h: NominalDiscriminatedUnionHandlers<Player>): Player => {
        switch (player.type) {
          case 'Admin':
            return h.Admin(player)
          case 'User':
            return h.User(player)
        }
      }
    }

    const user: User = {
      id: 'string',
      username: 'string'
    }

    const admin: Admin = {
      id: 'string',
      adminPass: 'string',
      otherAdminStuff: 'string'
    }

    const handlers = {
      Admin: (ad: AdminN): AdminN => {
        return ad
      },
      User: (us: UserN): UserN => {
        return us
      }
    }

    function smFn(player: Player) {
      return [
        Nominal.match(player, handlers)
        // matchSumType(player, handlers)
      ]
    }

    const adminN = AdminN.new(admin)
    const userN = UserN.new(user)

    expect(smFn(adminN)).toEqual([adminN])
    expect(smFn(userN)).toEqual([userN])
  })
})
