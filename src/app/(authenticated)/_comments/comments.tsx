
import Comment from "./comment";
import CreateComment from "./create-comment";


export default async function Comments({ post_id }: { post_id: string }) {
    const dynamicData = await fetch(`https://c27skmgaxj.execute-api.ap-southeast-2.amazonaws.com/dev/comments?post_id=${post_id}`, { cache: 'no-store' })
    const data = await dynamicData.json();

    return (
        <>
 
                {data && data.map((comment: any) => (
                    <Comment key={comment.id} data={comment} />
                ))}


            <CreateComment post_id={post_id}/>
        </>
    )
}