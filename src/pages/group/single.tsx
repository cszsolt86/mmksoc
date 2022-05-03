import React from 'react';
import { useParams } from 'react-router-dom';

export default function SingleGroupPage() {
	const { id } = useParams();
	return <p>{`Group with id ${id}`}</p>;
}
