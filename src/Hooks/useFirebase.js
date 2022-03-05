import React, { useEffect, useState } from 'react';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import initFirebaseAuth from '../FireBase/firebase.init';

initFirebaseAuth();

const useFirebase = () => {
	const [users, setUser] = useState({});
	const googleProvider = new GoogleAuthProvider();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [err, setErr] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth();

	const handleRegistration = (event) => {
		event.preventDefault();
		if (password.length < 6) {
			setErr('Must be atleast 6 characters');
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				const user = res.user;
				setErr('');
			})
			.catch((error) => console.log(error.message));
	};
	const emailHandle = (e) => {
		setEmail(e.target.value);
	};
	const passwordHandle = (e) => {
		setPassword(e.target.value);
	};

	const handleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then((res) => {
				setUser({});
			})
			.finally(() => setIsLoading(false));
	};
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);

	return {
		users,
		handleSignIn,
		logOut,
		handleRegistration,
		emailHandle,
		passwordHandle,
		err,
		isLoading,
		setIsLoading,
	};
};
export default useFirebase;
