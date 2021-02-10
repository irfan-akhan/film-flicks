// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './GoogleAuth.css';

// class GoogleAuth extends Component {
//     state = { isSignedIn: null };

//     componentDidMount() {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client
//                 .init({
//                     clientId:
//                         '556557242237-mpkbrp7t86tf9dnav6179pboj88qvs2s.apps.googleusercontent.com',
//                     scope: 'email',
//                 })
//                 .then(() => {
//                     this.auth = window.gapi.auth2.getAuthInstance();
//                     this.onAuthChange();
//                     this.auth.isSignedIn.listen(this.onAuthChange);
//                     // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
//                 });
//         });
//     }
//     signInHandler = () => {
//         this.auth.signIn();
//     };
//     signOutHandler = () => {
//         this.auth.signOut();
//     };
//     renderAuthButtons = () => {
//         console.log('state is: ', this.state.isSignedIn);
//         if (this.state.isSignedIn) {
//             return (
//                 <div className="profile__options">
//                     <Link
//                         to={{
//                             pathname: '/user',
//                             state: { user: this.auth.currentUser.get().getId() },
//                         }}
//                     >
//                         <img
//                             src="https://i.ibb.co/MV4TrQR/user-circle.png"
//                             alt="user profile"
//                         ></img>
//                     </Link>
//                     <h2 onClick={this.signOutHandler}>Sign out</h2>
//                 </div>
//             );
//         } else
//             return (
//                 <div onClick={this.signInHandler}>
//                     <img
//                         src="https://i.ibb.co/jy1ttd3/user-plus.png"
//                         alt="sign in"
//                     ></img>
//                 </div>
//             );
//     };
//     onAuthChange = () => {
//         this.setState({ isSignedIn: this.auth.isSignedIn.get() });
//     };
//     render() {
//         return <div>{this.renderAuthButtons()}</div>;
//     }
// }

// export default GoogleAuth;
