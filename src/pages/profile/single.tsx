import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProfilePage() {
	const { id } = useParams();
	return <p>{`Profile with id ${id}`}</p>;
}
