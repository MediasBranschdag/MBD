import BACKEND_PATH from "../backend-environment";

export class InstagramPost {
    id: string;
    imageUrl: string;
    imageText: string;
    linkToPost: string;
    numberOfLikes: number;

    constructor(id: string, imageURL: string, imageText: string, numberOfLikes: number, linkToPost: string) {
        this.id = id;
        this.imageUrl = imageURL;
        this.imageText = imageText;
        this.numberOfLikes = numberOfLikes;
        this.linkToPost = linkToPost;
    }
}

export class InstagramModel {
    static getInstagramImages(): Promise<Array<InstagramPost>> {
        return fetch(BACKEND_PATH + "instagram.php")
            .then(r => r.json())
            .then(posts => posts.data.map((post: any) => {
                return new InstagramPost(
                    post.id,
                    post.images.standard_resolution.url,
                    post.caption.text,
                    post.likes.count,
                    post.link
                );
            }))
            .catch(r => {
                
            });
    };
}