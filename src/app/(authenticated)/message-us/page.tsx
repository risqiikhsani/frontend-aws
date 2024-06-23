import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <>
            <Card>
                <CardHeader className="text-center">
                <p>Please leave us your message to :</p>
                
                <div className="flex flex-col">
                <Badge className="m-2" variant="outline">risqiikhsani16@gmail.com</Badge>
                        <Badge className="m-2" variant="outline">zakinedhiansah@gmail.com</Badge>
                        <Badge className="m-2" variant="outline">hello@mytimcorp.com</Badge>
                </div>
                        
                </CardHeader>
            </Card>



        </>
    )
}