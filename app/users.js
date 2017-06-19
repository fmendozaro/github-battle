/**
 * Created by fer on 6/19/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var PropTypes = require('prop-types');

class Users extends React.Component {
    render() {

        var friends = this.props.list.filter(function (user){
            return user.friend === true;
        });

        var nonFriends = this.props.list.filter(function (user){
            return user.friend !== true;
        });

        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {friends.map(function (friend){
                        return <li>{friend.name}</li>
                    })};
                </ul>

                <hr />

                <h1> Non Friends </h1>
                <ul>
                    {nonFriends.map(function (friendWho){
                        return <li>{friendWho.name}</li>
                    })};
                </ul>
            </div>
        )

    }// render end
}

// Makes the list required and always expect an array when you try to use it.

User.propTypes = {
    list: PropTypes.array.isRequired
}

ReactDOM.render(
    <Users list={[
        { name: 'Tyler', friend: true },
        { name: 'Ryan', friend: true },
        { name: 'Michael', friend: false },
        { name: 'Mikenzi', friend: false },
        { name: 'Jessica', friend: true },
        { name: 'Dan', friend: false } ]}
    />,
    document.getElementById('users')
);