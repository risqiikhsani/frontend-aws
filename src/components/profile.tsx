import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/context/auth"
import { Badge } from "./ui/badge"
import UpdateProfile from "./update-profile"

export default function Profile() {
    const {user} = useAuth()
    return (
        <>
            <div className="flex-col">
                <Avatar className="mx-auto h-20 w-20 my-20">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {/* <div className="flex gap-2 items-start">
                <Badge variant="outline">id</Badge>  
                <p className="text-md">{user.id}</p>
                </div>
                <div className="flex gap-2 items-start">
                <Badge variant="outline">name</Badge>
                <p className="text-xl">{user.name}</p>
                </div> */}

                <UpdateProfile data={user}/>

            </div>
        </>
    )
}