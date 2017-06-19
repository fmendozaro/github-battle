/**
 * Created by fer on 6/19/17.
 */
class Users extends React.Component {
    render() {
        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {/*Create an <li> for every name in the list array who is also your friend*/}
                </ul>

                <hr />

                <h1> Non Friends </h1>
                <ul>
                    {/*Create an <li> for every name in the list array who is NOT your friend*/}
                </ul>
            </div>
        )
    }
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