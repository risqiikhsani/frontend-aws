import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, ShareIcon } from "@heroicons/react/24/outline"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// in aws dynamodb , there is a table of post,comment,likes.
// a post data contains attributes like post text, post creator , post amount likes, post amount comments.
// the liks and comments are in different table.
// when I fetch list of post data. I want to show the attribute.
// but about the amount likes and amount comments.
// for most used way in company, and faster query, which is best approach
// amount likes or comments is received by fetching and calculating the number of associated data in likes table
// or 
// amount likes or comments is received by , when the likes table got updated , it will trigger aws lambda function to modify the amount of likes or comments by increasing +1 or decreasing -1 of the number, so everytime user add likes or remove likes in likes table , it will trigger lambda to update the amount likes attribute in post data.
// which is more efficient and faster

// ChatGPT
// In AWS DynamoDB, the second approach—using AWS Lambda to update the likes and comments count—is generally more efficient and faster for the following reasons:
// Reduced Read Latency: By precomputing and storing the counts directly in the post data, you avoid having to perform multiple read operations and aggregations each time you fetch post data. This results in faster read operations since you retrieve all necessary data in a single query.
// Consistent Performance: DynamoDB's performance is highly predictable for single-item reads and writes. If you compute the counts on the fly, the time taken can vary based on the number of associated likes and comments, leading to inconsistent read performance. Precomputing the counts ensures that the read performance is always constant.
// Simplified Query Logic: By having the counts stored directly in the post data, the logic for retrieving post data becomes simpler. You don't need to join tables or run additional queries to get the counts, making your codebase simpler and easier to maintain.
// Scalability: Lambda functions can scale automatically to handle the update load when likes or comments are added or removed. This makes the system more scalable as it can handle bursts of activity (e.g., a post going viral) without degrading performance.
// Cost Efficiency: DynamoDB charges based on read and write capacity units. Fetching and aggregating data from multiple tables can consume more read capacity units than fetching precomputed counts, potentially leading to higher costs. By updating the counts incrementally with Lambda, you may also optimize write costs since each update operation is small and targeted.
// Here's a brief outline of how the second approach can be implemented:

// Update Likes/Comments: When a like or comment is added or removed, update the respective table.
// Trigger Lambda: Use DynamoDB Streams to capture changes to the likes or comments tables.
// Lambda Function: The Lambda function will be triggered by the stream events, and it will update the amount_likes or amount_comments attribute in the post data.
// Update Post Data: The Lambda function performs an update operation on the post table to increment or decrement the count.
// This way, your read queries remain efficient and quick, with the trade-off being slightly more complex write operations due to the Lambda integration.

// In summary, using AWS Lambda to update the counts as they change is generally the best approach for maintaining efficient and fast queries in a highly scalable and cost-effective manner.

export default function Page() {
    return (
        <>
            <p>Postsnp page</p>
            <Button>Create Post</Button>
            <Card className="my-2">
                <div className="p-2 flex justify-left items-start gap-4">
                    <Button variant="outline" className="flex gap-2 justify-center items-center p-6 rounded-xl">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>Kevin</p>
                    </Button>

                    <div className="flex-1">
                    </div>
                    <CardDescription>3 June 2024</CardDescription>
                    <Button variant="outline" size="icon">
                        <EllipsisVerticalIcon className="h-4 w-4" />
                    </Button>
                </div>
     
                {/* 
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader> */}
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
    
                <div className="flex justify-between p-2">
                    <div className="flex justify-center items-center gap-2">
                        <Button variant="outline" size="icon">
                            <HeartIcon className="h-4 w-4" />
                        </Button>
                        <p>112 likes</p>
                    </div>
                    <Button variant="outline" size="icon">
                        <ShareIcon className="h-4 w-4" />
                    </Button>

                </div>
            
                <Accordion type="single" collapsible className="px-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>2 comments</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>

        </>
    )
}