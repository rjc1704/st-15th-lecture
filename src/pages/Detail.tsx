import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../api/todos";
import { Todo } from "../types/todo.type";
import { AxiosError } from "axios";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isPending, error } = useQuery<
    Todo,
    AxiosError,
    Todo,
    [string, string]
  >({
    queryKey: ["todos", id!],
    queryFn: getDetail,
    enabled: !!id,
  });

  if (isPending) return <div style={{ fontSize: 36 }}>로딩중...</div>;
  if (error) {
    console.error(error);
    return (
      <div style={{ fontSize: 24 }}>에러가 발생했습니다: {error.message}</div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <p>제목: {data.title}</p>
      <p>내용: {data.contents}</p>
      <p>작성일자: {new Date(data.createdAt).toDateString()}</p>
    </div>
  );
}