import { useEffect, useState } from 'react';
import initFirebaseAuth from '../FireBase/firebase.init';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';

initFirebaseAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [authError, setAuthError] = useState('');

	const auth = getAuth();
	const provider = new GoogleAuthProvider();

	const googleSignIn = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, provider)
			.then((result) => {
				// const user = result.user;
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const registerUser = (email, password, location, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);

				// ..
			})
			.finally(() => setIsLoading(false));
	};

	const loginUser = (email, password, location, history) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}

			setIsLoading(false);
		});

		return () => unsubscribe;
	}, [auth]);

	const logOut = () => {
		setIsLoading(true);

		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			})
			.finally(() => setIsLoading(false));
	};

	return {
		user,
		registerUser,
		logOut,
		loginUser,
		isLoading,
		authError,
		googleSignIn,
	};
};

export default useFirebase;
