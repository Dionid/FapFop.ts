import { ProductType, ProductTypeFactory, SumType, SumTypeHandlers } from './adt'

describe('adt', () => {
  it('should ', () => {
    type User = {
      id: string
      username: string
    }
    type UserN = ProductType<'User', User>
    const UserN = ProductTypeFactory<UserN>('User')

    type Admin = {
      id: string
      adminPass: string
      otherAdminStuff: string
    }
    type AdminN = ProductType<'Admin', Admin>
    const AdminN = ProductTypeFactory<AdminN>('Admin')

    type Player = AdminN | UserN

    const Player = {
      switchMatch: (player: Player, h: SumTypeHandlers<Player>): Player => {
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
      return [Player.switchMatch(player, handlers), SumType.match(player, handlers)]
    }

    const adminN = AdminN.new(admin)
    const userN = UserN.new(user)

    expect(smFn(adminN)).toEqual([adminN, adminN])
    expect(smFn(userN)).toEqual([userN, userN])
  })
})
