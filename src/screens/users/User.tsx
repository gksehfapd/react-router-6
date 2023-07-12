import { Link, Outlet, useParams } from 'react-router-dom'
import { users } from '../../db'

function User() {
	const { userId } = useParams()

	return (
		<div>
			<h1>
				User with id {userId} is name: {users[Number(userId) - 1].name}
			</h1>
			<hr />
			{/* to='/followers' 는 절대경로
				to='followers' 는 상대경로 */}
			<Link to="followers">See followers</Link>
			<Outlet
				context={{
					nameOfMyUser: users[Number(userId) - 1].name
				}}
			/>
		</div>
	)
}

export default User
