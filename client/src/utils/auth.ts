import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {

    return jwtDecode<UserData>(this.getToken());
    console.log('Profile: ', profile);
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
    console.log('Logged in: ', loggedIn);
  }
  
  isTokenExpired(token: string) {
    try {
      
      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded?.exp && decoded?.exp < Date.now() / 1000) {
        console.log('Token is not expired');
        return true;
      }
    } catch (err) {
      console.log('Token is expired: ', err);
      return false;
    }
  }

  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
    console.log('Token: ', token);
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
    console.log('Logged in: ', idToken
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
    console.log('Logged out');
  }
}

export default new AuthService();
