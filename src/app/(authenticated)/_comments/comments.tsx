

"use client"

import { useQuery } from '@tanstack/react-query';
import Comment from "./comment";
import CreateComment from "./create-comment";

const fetchComments = async (post_id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/comments?post_id=${post_id}`);
  return res.json();
};

export default function Comments({ post_id }:{post_id:string}) {
  const { data, isLoading, error } = useQuery({queryKey:['comments',post_id],queryFn:() =>fetchComments(post_id)});

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {data && data.map((comment: any) => (
        <Comment key={comment.id} data={comment} />
      ))}
      <CreateComment post_id={post_id} />
    </>
  );
}