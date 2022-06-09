import { Post } from "src/app/wall/wall/interfaces/post.interface";

const mapTo = (value: string) => new Date (value).getTime();

export class Sorter {
    static sortBy(collection: Post[]): Post[] {
        return [...collection].sort((a,b) =>{
            
            const value1 =mapTo(a.createdTime)
            const value2 =mapTo(b.createdTime)
            return value2 - value1;
        })
    }
}
