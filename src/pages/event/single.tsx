import React from 'react';
import { useParams } from 'react-router-dom';

export default function SingleEventPage() {
	const { id } = useParams();
	return <p>{`Event with id ${id}`}</p>;
}
