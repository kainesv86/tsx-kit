export interface User {
        username: string;
        fullname: string;
        email: string;
        role: "ADMIN" | "USER";
}

export interface AuthState extends User {
        isLogin: boolean;
}

export interface UserLoginDto {
        username: string;
        password: string;
}
