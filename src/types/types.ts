export interface UserType {
    id: string;
    name: string;
    profile_image_url?: string;
}

export interface MessageChatBotBasicType {
    role: string;
    content: string;
}