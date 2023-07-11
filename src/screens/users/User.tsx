import { useParams } from 'react-router-dom'
import { users } from '../../db'

function User() {
	const { userId } = useParams()

	return (
		<div>
			User with id {userId} is name: {users[Number(userId) - 1].name}
		</div>
	)
}

export default User
