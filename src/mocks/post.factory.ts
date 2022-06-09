import { Post } from "../app/wall/wall/interfaces/post.interface";
import { userFactory } from "./user.factory";

export function postFactory(): Post {
  return {
    id: 'fake-id',
    createdTime: 'fake-createdTime',
    author: userFactory(),
    body: 'fake-body',
    images: [],
  };
}