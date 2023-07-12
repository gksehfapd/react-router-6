import { useOutletContext } from 'react-router-dom'

interface IFollowersCtx {
	nameOfMyUser: string
}

function Followers() {
	const { nameOfMyUser } = useOutletContext<IFollowersCtx>()

	return <h1>Here are {nameOfMyUser}의 followers</h1>
}

export default Followers
