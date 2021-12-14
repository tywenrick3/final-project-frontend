import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// Components
import UserCard from '../components/UserCard';
import { baseUrl } from '../App';

function UserProfile({ userInformation }) {
	// Display all post by ONE USER
	const [users, setUsers] = useState([]);
	let { uid } = useParams();
	console.log({ userInformation });
	useEffect(() => {
		// Get all of a users posts
		axios
			.get(`${baseUrl}/profile/${uid}`)
			.then(function (response) {
				console.log({ response });
				setUsers(response.data);
			})
			.catch(function (error) {
				//handle error
				console.warn(error);
			});
	}, []);

	return (
		<div className='PageWrapper'>
			<h1>{users.userName}</h1>
			{users.map((user, i) => (
				<UserCard user={user} key={i} />
			))}
		</div>
	);
}

export default UserProfile;
