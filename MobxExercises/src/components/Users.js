import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'

import { observer, inject } from 'mobx-react'

@inject('UserStore')
@observer
export default class Users extends Component {
    render() {
        const { UserStore } = this.props
        return (
            <View>

                {
                    UserStore.loading ? <ActivityIndicator size={"small"} /> :
                        <Button
                            title={"fetch users"}
                            onPress={() => UserStore.fetchUsers()}
                        />
                }

                <View>
                    {
                        UserStore.error ? <Text>{UserStore.error}</Text> :
                            UserStore.users.map((user, key) => (
                                <View key={key}>
                                    <Text>{user.name.first}</Text>
                                </View>
                            ))
                    }
                </View>
            </View>
        )
    }
}