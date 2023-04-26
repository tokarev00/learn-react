import axios from 'axios';
const instance =  axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'e3ca2f6c-c02c-4add-b18e-abb421e31bbb'}
})
export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post('follow/' + userId);
    },
    unfollow(userId) {
        return instance.delete( 'follow/' + userId);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get('/profile/' + userId)
    },
    getStatus(userId) {
        return instance.get('/profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('/profile/status/', {status: status})
    },
    savePhoto(file) {
         const formData = new FormData();
         formData.append('image', file)
        return instance.put('/profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put('/profile/', profile)
    }
}
export const authAPI = {
    me(){
        return instance.get('/auth/me');
    },
    login (email, password, rememberMe= false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha});
    },
    logout () {
        return instance.delete('auth/login');
    }
}
export const securityAPI = {
    getCaptchaURL() {
        return instance.get('/security/get-captcha-url');
    },
}