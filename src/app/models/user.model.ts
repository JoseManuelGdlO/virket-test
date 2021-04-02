export class UserResponseModel {
    ok: boolean;
    codeMessage: string;
    data: UserModel
}

export class UserModel {
    fullName: string;
    picture: PictureUserModel;
    gender: string;
    email: string;
}

export class PictureUserModel {
    large: string;
    medium: string;
    thumbnail: string;
}