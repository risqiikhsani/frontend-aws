import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Profile() {
    return (
        <>
            <div className="flex-col p-4 text-center">
                <Avatar className="mx-auto h-20 w-20 my-20">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-xl">name</p>
                <p className="text-xl">email</p>
            </div>
        </>
    )
}