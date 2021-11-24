import { Nominal, NominalBehaviour, NominalDiscriminatedUnionHandlers } from './Nominal'

describe('adt', () => {
  it('should ', () => {
    type User = {
      id: string
      username: string
    }
    type UserN = Nominal<'User', User>
    const UserN = NominalBehaviour.createCurriedType<UserN>('User')

    type Admin = {
      id: string
      adminPass: string
      otherAdminStuff: string
    }
    type AdminN = Nominal<'Admin', Admin>
    const AdminN = NominalBehaviour.createCurriedType<AdminN>('Admin')

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

    const adminN = AdminN.create(admin)
    const userN = UserN.create(user)

    expect(smFn(adminN)).toEqual([adminN])
    expect(smFn(userN)).toEqual([userN])
  })
})
